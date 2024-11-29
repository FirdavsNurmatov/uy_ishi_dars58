import db from "../database/index.js";
import { generateToken } from "../utils/index.js";

export const registerService = async (userData) => {
  try {
    const email = userData?.email;
    const oldData = await db.select("*").from("users").where({ email });

    if (oldData >= 1) {
      return { status: 401, msg: "User already exists!" };
    }

    await db.table("users").insert(userData);

    return { status: 200, msg: "User created" };
  } catch (error) {
    return error;
  }
};

export const loginService = async (email) => {
  try {
    const data = await db.select("*").from("users").where({ email });

    if (data.length >= 1) {
      await db.table("users").where({ email }).update({ is_active: true });

      const accessToken = await generateToken("access", { email });
      const refreshToken = await generateToken("refresh", { email });

      return {
        status: 200,
        msg: { accessToken: accessToken, refreshToken: refreshToken },
      };
    }

    return { status: 404, msg: "User not found!" };
  } catch (error) {
    return error;
  }
};
