import { Hono } from "hono";
import { authGuard } from "../middlewares/index.js";
import {
  deleteUserByEmailCon,
  getAllUsersCon,
  getUserByEmailCon,
  updateUserByEmailCon,
} from "../controllers/index.js";
import { validateUser } from "../middlewares/user.middleware.js";

export const userRouter = new Hono();

userRouter.get("/users", authGuard, getAllUsersCon);
userRouter.get("/users/:email", authGuard, getUserByEmailCon);
userRouter.put("/users/:email", authGuard, validateUser, updateUserByEmailCon);
userRouter.delete("/users/:email", authGuard, deleteUserByEmailCon);
