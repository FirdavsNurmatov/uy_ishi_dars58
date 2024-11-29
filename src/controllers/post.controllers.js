import {
  createPostService,
  deletePostByIdService,
  getAllPostsService,
  getPostByIdService,
  updatePostByIdService,
} from "../services/index.js";

const responseHandler = function (c, result) {
  if (result == 400 || result?.status != 200) {
    return c.json(
      {
        message: result.msg,
      },
      result.status
    );
  }
  return c.json(
    {
      message: result.msg,
    },
    result.status
  );
};

export const getAllPostsCon = async (c) => {
  try {
    const allData = await getAllPostsService();

    responseHandler(c, allData);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const getPostByIdCon = async (c) => {
  try {
    const id = c.params.id;

    const data = await getPostByIdService(id);

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const createPostByIdCon = async (c) => {
  try {
    const { user_id, title, body } = c.body;

    const data = await createPostService({
      user_id: user_id,
      title: title,
      body: body,
    });

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const updatePostByIdCon = async (c) => {
  try {
    const id = c.params.id;

    const { user_id, title, body } = c.body;

    const data = await updatePostByIdService(id, {
      user_id: user_id,
      title: title,
      body: body,
    });

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const deletePostByIdCon = async (c) => {
  try {
    const id = c.params.id;

    const data = await deletePostByIdService(id);

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};
