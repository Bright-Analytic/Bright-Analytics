import { Router } from "express";
import { dispatch } from "../controllers/main.controller";

const router = Router();

router.route("/dispatch").post(dispatch);

export default router;
