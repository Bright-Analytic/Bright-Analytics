import dotenv from "dotenv";
import { app } from "./src/app";

dotenv.config({
  path: "../../.env",
});

const port = process.env.PORT ?? process.env.ANALYTICS_API_PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
