import db from "../database/index.js";

export const getAllPostsService = async () => {
  try {
    const allData = await db.select("*").from("posts");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getPostByIdService = async (id) => {
  try {
    const data = await db.select("*").from("posts").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Post not found!" };
  } catch (error) {
    return error;
  }
};

export const createPostService = async (postData) => {
  try {
    const id = postData?.id;
    const oldData = await db.select("*").from("posts").where({ id });

    if (oldData.length >= 1) {
      return { status: 401, msg: "Post already exists!" };
    }

    await db.table("posts").insert(postData);

    return { status: 200, msg: "Post created!" };
  } catch (error) {
    return error;
  }
};

export const updatePostByIdService = async (id, postData) => {
  try {
    const data = await db.select("*").from("posts").where({ id });

    if (data.length >= 1) {
      await db.table("posts").where({ id }).update(postData);
      return { status: 200, msg: "Post updated!" };
    }

    return { status: 404, msg: "Post not found!" };
  } catch (error) {
    return error;
  }
};

export const deletePostByIdService = async (id) => {
  try {
    const data = await db.select("*").from("posts").where({ id });

    if (data.length >= 1) {
      await db.table("posts").where({ id }).del();
      return { status: 200, msg: "Post deleted!" };
    }

    return { status: 404, msg: "Post not found!" };
  } catch (error) {
    return error;
  }
};
