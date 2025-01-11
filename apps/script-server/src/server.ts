import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
import path from "path";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = process.env.SCRIPT_PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(morgan("combined"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "scripts", "latest.js"));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
