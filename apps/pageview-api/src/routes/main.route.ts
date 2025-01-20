import { Router } from "express";
import { collect } from "../controllers/main.controller";

const router = Router();

router.route("/simple.gif").get(collect);

export default router;
