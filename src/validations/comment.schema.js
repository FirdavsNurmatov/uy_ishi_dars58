import Joi from "joi";

export const commentValidator = (comment) => {
  const schema = Joi.object({
    post_id: Joi.number().min(1),
    user_id: Joi.number().min(1),
    body: Joi.string().min(10).max(500),
  });
  return schema.validate(comment, { abortEarly: false });
};
