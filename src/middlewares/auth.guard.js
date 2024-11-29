import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const authGuard = async (c, next) => {
  const authHeader = c.req.headers.get("Authorization");

  if (!authHeader) {
    return c.json({ error: "Authorization token yo'q!" }, 401);
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return c.json({ error: "Bearer token noto'g'ri!" }, 400);
  }

  const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  c.user = decoded;

  return next();
};
