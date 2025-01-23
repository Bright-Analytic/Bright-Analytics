import path from "path";
import uap from "ua-parser-js";
import { asyncHandler } from "../lib/asyncHandler";
import { ApiError } from "../lib/ApiError";
import { KafkaClient } from "@shared/kafka-client";

type DataToQueue = {
  [key: string]: string | undefined | boolean | number;
};

const gifPath = path.join(__dirname, "../public", "simple.gif");

const collect = asyncHandler(async (req, res, _) => {
  const {
    hostname,
    ua,
    https,
    timezone,
    page_id,
    session_id,
    path,
    viewport_width,
    viewport_height,
    language,
    screen_width,
    screen_height,
    unique,
    uid,
    type,
    time,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    document_referrer,
  } = req.query;

  // extracted data
  const is_robot = /bot|crawler|spider|crawling/i.test(ua?.toString() ?? "");

  // headers data
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // browser data
  const parsed_ua = uap.UAParser(ua?.toString() ?? "");
  const browser_name = parsed_ua.browser.name;
  const browser_version = parsed_ua.browser.version;
  const os_name = parsed_ua.os.name;
  const os_version = parsed_ua.os.version;
  const device_type = parsed_ua.device.type;
  const dataToQueue: DataToQueue = {
    hn: hostname?.toString(),
    ua: ua?.toString(),
    s: https ? (https == "1" ? true : false) : undefined,
    tz: timezone?.toString(),
    pid: page_id?.toString(),
    sid: session_id?.toString(),
    p: path?.toString(),
    vh: viewport_height ? Number(viewport_height) : undefined,
    vw: viewport_width ? Number(viewport_width) : undefined,
    l: language?.toString(),
    sw: screen_width ? Number(screen_width) : undefined,
    sh: screen_height ? Number(screen_height) : undefined,
    u: unique ? (unique == "1" ? true : false) : undefined,
    uid: uid?.toString(),
    ty: type?.toString(),
    tm: time ? Number(time) : undefined,
    r: referrer ? referrer.toString().trim() == "" ? undefined : referrer.toString() : undefined,
    ir: is_robot,
    ip: ip?.toString(),
    bn: browser_name,
    bv: browser_version,
    on: os_name,
    ov: os_version,
    dt: device_type,
    ut_s: utm_source?.toString(),
    ut_m: utm_medium?.toString(),
    ut_ca: utm_campaign?.toString(),
    ut_co: utm_content?.toString(),
    ut_t: utm_term?.toString(),
    doc_ref: document_referrer?.toString(),
  };

  if (!hostname) throw new ApiError(400, "could not get hostname.");

  try {
    if (!global.kafka) {
      global.kafka = new KafkaClient("collect-data");
    }
    if (!global.kafka.producerConnected) {
      await global.kafka.loadTopic("raw-analytics");
      await global.kafka.initProducer();
    }
    if (!global.kafka.producer)
      throw new ApiError(400, "Failed to load kafka producers.");
    await global.kafka.producer.send({
      topic: "raw-analytics",
      messages: [
        {
          key: hostname.toString(),
          value: Buffer.from(JSON.stringify(dataToQueue)),
        },
      ],
    });
  } catch (error) {
    throw new ApiError(400, "Failed to produce message", [error]);
  }
  return res.status(200).sendFile(gifPath);
});

export { collect };
