import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import uap from "ua-parser-js";
import { connectRmq } from "../lib/rabbitmq";
import {Buffer} from 'buffer'

const collect = asyncHandler(async (req, res, next) => {
  // save data to sql
  const userAgent = req.headers["user-agent"] ?? "";
  const referrer = req.headers.referer || req.headers.referrer;
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const acceptLanguage = req.headers["accept-language"] ?? "";
  const [langLanguage, langRegion] = acceptLanguage.split(/[-,;]/);
  const addedUnix = Date.now();
  const addedDate = new Date().toISOString().split("T")[0];
  const addedIso = new Date().toISOString();
  const isRobot = /bot|crawler|spider|crawling/i.test(userAgent);

  const ua = uap.UAParser(req.headers["user-agent"]);
  const browserName = ua.browser.name;
  const browserVersion = ua.browser.version;
  const osName = ua.os.name;
  const osVersion = ua.os.version;
  const deviceType = ua.device.type;

  console.log("Body: ", req.body)
  const {
	url :{
		hostname,
		hostnameOriginal,
		path,
	},
	dimension: {
		viewportHeight,
		viewportWidth,
		screenHeight,
		screenWidth
	},
	source: {
		utmSource,
		utmMedium,
		utmCampaign,
		utmContent,
		utmTerm,
		documentReferrer
	}
  } = req.body;

  const dataToQueue = Buffer.from(JSON.stringify({
    country_code: langLanguage,
    lang_region: langRegion,
    added_unix: addedUnix,
    added_date: addedDate,
    added_iso: addedIso,
    is_robot: isRobot,
    hostname,
    hostname_original: hostnameOriginal,
    path,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_term: utmTerm,
    document_referrer: documentReferrer,
    browser_name: browserName,
    browser_version: browserVersion,
    os_name: osName,
    os_version: osVersion,
    user_agent: userAgent,
    device_type: deviceType,
    viewport_height: viewportHeight,
    viewport_width: viewportWidth,
    screen_width: screenWidth,
    screen_height: screenHeight
  }))

  const channel = await connectRmq();

  channel.sendToQueue(process.env.RMQ_QUEUE_NAME || "analytics", dataToQueue)

  return res.status(200).json(new ApiResponse(200, null));
});

export { collect };
