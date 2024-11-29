import {
  getAllUsersService,
  getUserByEmailService,
  updateUserByEmailService,
  deleteUserByEmailService,
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

export const getAllUsersCon = async (c) => {
  try {
    const allData = await getAllUsersService();

    responseHandler(c, allData);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const getUserByEmailCon = async (c) => {
  try {
    const email = c.params.email;

    const data = await getUserByEmailService(email);

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const updateUserByEmailCon = async (c) => {
  try {
    const currentEmail = c.params.email;

    const { username, newEmail, password } = c.body;

    const data = await updateUserByEmailService(currentEmail, {
      username: username,
      email: newEmail,
      password: password,
    });

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const deleteUserByEmailCon = async (c) => {
  try {
    const email = c.params.email;

    const data = await deleteUserByEmailService(email);

    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};
