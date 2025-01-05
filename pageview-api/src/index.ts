import dotenv from "dotenv";
import {app} from "./app"

dotenv.config({
    path: '../.env'
});

const port = process.env.PAGEVIEW_PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});