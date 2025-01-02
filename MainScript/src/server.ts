import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
import morgan from "morgan"
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.SCRIPT_PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("combined"))
app.use(express.json({ limit: "16kb" }));
app.use("scripts", express.static("src/scripts"))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
