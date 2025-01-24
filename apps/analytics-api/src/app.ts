import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { ApiResponse } from "./lib/ApiResponse";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(
  cors({
    origin: [
      "*"
    ],
    credentials: true,
  }),
);

app.use(morgan("combined"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use(
  clerkMiddleware({
    debug: true,
  }),
);

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "System is healthy 😎."));
});

// routes import
import mainRoute from "./routes/main.route";
import userRoute from "./routes/user.route";
import hostRoute from "./routes/host.route";
import webhookRoute from './routes/webhook.route';

// Routes declarations
app.use("/api/v1/", mainRoute);
app.use("/api/v1/host", hostRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/webhook", webhookRoute)

export { app };
