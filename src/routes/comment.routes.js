import { Hono } from "hono";
import {
  createCommentByIdCon,
  deleteCommentByIdCon,
  getAllCommentsCon,
  getCommentByIdCon,
  updateCommentByIdCon,
} from "../controllers/index.js";
import { authGuard, validateComment } from "../middlewares/index.js";

export const commentRouter = new Hono();

commentRouter.get("/comment", authGuard, getAllCommentsCon);
commentRouter.get("/comment/:id", authGuard, getCommentByIdCon);
commentRouter.post(
  "/comment",
  authGuard,
  validateComment,
  createCommentByIdCon
);
commentRouter.put(
  "/comment/:id",
  authGuard,
  validateComment,
  updateCommentByIdCon
);
commentRouter.delete("/comment/:id", authGuard, deleteCommentByIdCon);
