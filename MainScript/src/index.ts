import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

import { ModuleKind, ScriptTarget, transpileModule } from "typescript";
import morgan from "morgan"
import path from "path";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fs from "fs/promises";

const port = process.env.SCRIPT_PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("combined"))
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.get("/scripts/:file", async (req: Request, res: Response) => {
  const { file } = req.params;
  if (!file.endsWith(".js")) {
    res.status(400).send({
      statusCode: 400,
      data: null,
      message: "Only .js files are allowed",
      errors: [],
    });
  }

  const tsFilePath = path.join(
    __dirname,
    "scripts",
    file.replace(".js", ".ts")
  );

  try {
    const tsContent = await fs.readFile(tsFilePath, "utf-8");

    const compiledJs = transpileModule(tsContent, {
        compilerOptions: {
            module: ModuleKind.CommonJS,
            target: ScriptTarget.ES2016,
            removeComments: true,
            newLine: 0
        }
    })

    res.type("application/javascript").send(compiledJs.outputText);
  } catch (error: any) {
    res.status(400).send({
      statusCode: 400,
      data: null,
      message: error.message || "Some error occured.",
      errors: [],
    });
  }
});



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
