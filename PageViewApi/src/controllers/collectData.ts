import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import uap from "ua-parser-js";

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
  const hostname = req.hostname;

  const ua = uap.UAParser(req.headers["user-agent"]);
  const browserName = ua.browser.name;
  const browserVersion = ua.browser.version;
  const osName = ua.os.name;
  const osVersion = ua.os.version;
  const deviceType = ua.device.type;

  console.log("Body: ", req.body)

  console.log({
    userAgent,
    hostname,
    addedUnix,
    addedDate,
    addedIso,
    isRobot,
    referrer,
    clientIp,
    langLanguage,
    langRegion,
    browserName,
    browserVersion,
    osName,
    osVersion,
    deviceType,
  });

  return res.status(200).json(new ApiResponse(200, null));
});

export { collect };
