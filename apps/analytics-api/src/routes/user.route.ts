import { requireAuth } from "@clerk/express";
import { Router } from "express";
import { getUserData } from "../controllers/user.controller";

const router = Router()
// verified rotues
router.route('/').get(requireAuth(), getUserData);

export default router;