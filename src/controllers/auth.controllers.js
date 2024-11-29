import { loginService, registerService } from "../services/index.js";

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

export const registerCon = async (c) => {
  try {
    const { username, newEmail, password } = c.body;

    const data = await registerService({
      username: username,
      email: newEmail,
      password: password,
    });
    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};

export const loginCon = async (c) => {
  try {
    const { email } = c.body;

    const data = await loginService(email);
    responseHandler(c, data);
  } catch (error) {
    responseHandler(c, 400);
  }
};
