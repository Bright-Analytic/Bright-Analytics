import { requireAuth } from "@clerk/express";
import { Router } from "express";
import {
  cascadeDeleteUser,
  createNewUser,
  deleteUser,
  getUserData,
  updateUserDetails,
} from "../controllers/user.controller";

const router = Router();

// unveriried routes
router.route("/").post(createNewUser);

// verified rotues
router.route("/").get(requireAuth(), getUserData);
router.route("/").delete(requireAuth(), deleteUser);
router.route("/").patch(requireAuth(), updateUserDetails);
router.route("/cascade").delete(requireAuth(), cascadeDeleteUser);

export default router;
