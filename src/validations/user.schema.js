import Joi from "joi";

export const userValidator = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(51),
    email: Joi.string().required().messages({
      "any.required": `emailni kiriting`,
    }),
    password: Joi.string().required().messages({
        "any.required": `"password" kamida 8 ta belgidan iborat bo'lishi kerak`
    })  });
  return schema.validate(user, { abortEarly: false });
};
