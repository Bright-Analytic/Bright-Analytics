import { Router } from "express";
import { collect } from "../controllers/collectData";

const router = Router()

router.route("/collect").post(collect)

export default router;