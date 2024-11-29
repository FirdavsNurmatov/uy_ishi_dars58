import { Hono } from "hono";
import { loginCon, registerCon } from "../controllers/index.js";
import { validateUser } from "../middlewares/user.middleware.js";

export const authRouter = new Hono();

authRouter.post("/auth/register", validateUser, registerCon);
authRouter.post("/auth/login", loginCon);
