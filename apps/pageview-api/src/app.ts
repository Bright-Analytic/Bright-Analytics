import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { ApiResponse } from "./lib/ApiResponse";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(morgan("combined"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/public", express.static("src/public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "System is healthy 😎."));
});

// routes import
import mainRoute from "./routes/main.route";

// Routes declarations
app.use("/api/v1/", mainRoute);

export { app };
