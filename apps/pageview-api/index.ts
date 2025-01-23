import dotenv from "dotenv";
import { app } from "./src/app";

dotenv.config({
  path: "../../.env",
});

const port = process.env.PAGEVIEW_PORT || process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
