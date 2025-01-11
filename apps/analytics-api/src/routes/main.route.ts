import { Router } from "express";
import { dispatch } from "../controllers/dispatchJob";
import { retriveData } from "../controllers/retriver";

const router = Router();

router.route("/dispatch").post(dispatch);
router.route("/retrive").get(retriveData);

export default router;
