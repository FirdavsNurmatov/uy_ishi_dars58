import {
  createCommentService,
  deleteCommentByIdService,
  getAllCommentsService,
  getCommentByIdService,
  updateCommentByIdService,
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

export const getAllCommentsCon = async (c) => {
  try {
    const allData = await getAllCommentsService();

    responseHandler(c, allData);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const getCommentByIdCon = async (c) => {
  try {
    const id = c.params.id;

    const data = await getCommentByIdService(id);

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const createCommentByIdCon = async (c) => {
  try {
    const { post_id, user_id, c_body } = c.body;

    const data = await createCommentService({
      post_id: post_id,
      user_id: user_id,
      body: c_body,
    });

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const updateCommentByIdCon = async (c) => {
  try {
    const id = c.params.id;

    const { post_id, user_id, c_body } = c.body;

    const data = await updateCommentByIdService(id, {
      post_id: post_id,
      user_id: user_id,
      body: c_body,
    });

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const deleteCommentByIdCon = async (c) => {
  try {
    const id = c.params.id;

    const data = await deleteCommentByIdService(id);

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};
