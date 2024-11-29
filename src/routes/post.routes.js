import { Hono } from "hono";
import {
  createPostByIdCon,
  deletePostByIdCon,
  getAllPostsCon,
  getPostByIdCon,
  updatePostByIdCon,
} from "../controllers/index.js";

export const postRouter = new Hono();

postRouter.get("/posts", getAllPostsCon);
postRouter.get("/posts/:id", getPostByIdCon);
postRouter.post("/posts", createPostByIdCon);
postRouter.put("/posts/:id", updatePostByIdCon);
postRouter.delete("/posts/:id", deletePostByIdCon);
