import Joi from "joi";

export const postValidator = (post) => {
  const schema = Joi.object({
    user_id: Joi.number().min(1),
    title: Joi.string().min(10).max(500),
    body: Joi.string().min(10).max(500),
  });
  return schema.validate(post, { abortEarly: false });
};
