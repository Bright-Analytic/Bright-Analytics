import { Router } from "express";
import {
  getUnVerifiedHostname,
  getVerifiedHostname,
  postUnVerifiedHostname,
  postVerifiedHostname,
} from "../controllers/host.controller";
import { requireAuth } from "@clerk/express";

const router = Router();

router.route("/verified").get(requireAuth(), getVerifiedHostname);
router.route("/unverified").get(requireAuth(), getUnVerifiedHostname);

router.route("/verified").post(requireAuth(), postVerifiedHostname);
router.route("/unverified").post(requireAuth(), postUnVerifiedHostname);

export default router;
