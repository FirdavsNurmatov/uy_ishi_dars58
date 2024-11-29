import { Hono } from "hono";
import { config } from "dotenv";
import { serve } from "@hono/node-server";
import Routes from "./src/routes/index.js";

config();

const app = new Hono();

app.use("/", Routes);

const port = process.env.PORT;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
