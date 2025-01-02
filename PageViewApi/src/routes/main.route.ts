import { Router } from "express";
import { collect } from "../controllers/collectData";

const router = Router()

router.route("/").post(collect)

export default router;