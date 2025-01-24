import { Router } from "express";
import { userWebhookRequestHandler } from "../webhooks/user.webhook";
import { svixMiddleware } from "../middleware/swix.middleware";

const router = Router();

router.route('/clerk').post(userWebhookRequestHandler);

export default router;