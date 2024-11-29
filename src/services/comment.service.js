import db from "../database/index.js";

export const getAllCommentsService = async () => {
  try {
    const allData = await db.select("*").from("comments");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getCommentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("comments").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Comment not found!" };
  } catch (error) {
    return error;
  }
};

export const createCommentService = async (commentData) => {
  try {
    const id = commentData?.id;
    const oldData = await db.select("*").from("comments").where({ id });

    if (oldData.length >= 1) {
      return { status: 401, msg: "Comment already exists!" };
    }

    await db.table("comments").insert(commentData);

    return { status: 200, msg: "Comment created!" };
  } catch (error) {
    return error;
  }
};

export const updateCommentByIdService = async (id, commentData) => {
  try {
    const data = await db.select("*").from("comments").where({ id });

    if (data.length >= 1) {
      await db.table("comments").where({ id }).update(commentData);
      return { status: 200, msg: "Comment updated!" };
    }

    return { status: 404, msg: "Comment not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteCommentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("comments").where({ id });

    if (data.length >= 1) {
      await db.table("comments").where({ id }).del();
      return { status: 200, msg: "Comment deleted!" };
    }

    return { status: 404, msg: "Comment not found!" };
  } catch (error) {
    return error;
  }
};
