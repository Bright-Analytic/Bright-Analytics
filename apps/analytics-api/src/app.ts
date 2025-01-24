import { authMiddleware } from "./middleware/auth.middleware";
import { clerkMiddleware } from "@clerk/express";
import { ApiResponse } from "./lib/ApiResponse";
import { config } from "dotenv";

import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

config({
  path: "../../.env",
});

const app = express();

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

app.use(morgan("combined"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use(
  clerkMiddleware({
    debug: true,
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
    secretKey: process.env.CLERK_ENCRYPTION_KEY!,
    authorizedParties: ["*"],
  })
);

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "System is healthy 😎."));
});

// routes import
import mainRoute from "./routes/main.route";
import userRoute from "./routes/user.route";
import hostRoute from "./routes/host.route";
import webhookRoute from "./routes/webhook.route";

// Routes declarations
app.use("/api/v1/", authMiddleware, mainRoute);
app.use("/api/v1/host", authMiddleware, hostRoute);
app.use("/api/v1/user", authMiddleware , userRoute);
app.use("/api/v1/webhook", webhookRoute);

export { app };
