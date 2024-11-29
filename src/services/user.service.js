import db from "../database/index.js";

export const getAllUsersService = async () => {
  try {
    const allData = await db
      .select("id, username, email, created_at")
      .from("users");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getUserByEmailService = async (email) => {
  try {
    const data = await db.select("*").from("users").where({ email }).first();

    if (!data) {
      return { status: 404, msg: "User not found!" };
    }

    return { status: 200, msg: data };
  } catch (error) {
    return error;
  }
};

export const updateUserByEmailService = async (email, userData) => {
  try {
    const data = await db.select("*").from("users").where({ email });

    if (data.length >= 1) {
      await db.table("users").where({ email }).update(userData);
      return { status: 200, msg: "User updated!" };
    }

    return { status: 404, msg: "User not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteUserByEmailService = async (email) => {
  try {
    const data = await db.select("*").from("users").where({ email });

    if (data.length >= 1) {
      await db.table("users").where({ email }).del();
      return { status: 200, msg: "User deleted!" };
    }

    return { status: 404, msg: "User not found!" };
  } catch (error) {
    return error;
  }
};
