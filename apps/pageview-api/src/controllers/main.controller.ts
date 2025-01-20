import path from "path";
import uap from "ua-parser-js";
import { asyncHandler } from "../lib/asyncHandler";
import { ApiError } from "../lib/ApiError";
import { KafkaClient } from "@shared/kafka-client";

type DataToQueue = {
  [key: string]: string | undefined | boolean;
};

const gifPath = path.join(__dirname, "../public", "simple.gif")

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
    id,
    type,
    time,
    referrer,
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
    s: https?.toString(),
    tz: timezone?.toString(),
    pi: page_id?.toString(),
    si: session_id?.toString(),
    p: path?.toString(),
    vh: viewport_height?.toString(),
    vw: viewport_width?.toString(),
    l: language?.toString(),
    sw: screen_width?.toString(),
    sh: screen_height?.toString(),
    u: unique?.toString(),
    id: id?.toString(),
    ty: type?.toString(),
    tm: time?.toString(),
    r: referrer?.toString(),
    ir: is_robot,
    ip: ip?.toString(),
    bn: browser_name,
    bv: browser_version,
    on: os_name,
    ov: os_version,
    dt: device_type,
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

export {
    collect
}

/*
hostname=
ua=
https=
timezone=
page_id=
session_id=
sri=
path=
viewport_width=
viewport_height=
language=
screen_width=
screen_height=
unique=
id=
type= 
time=
referrer=
*/
