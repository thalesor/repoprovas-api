import joi from "joi";

export const authSchema = joi.object({
  email: joi .string() .min(6) .email(),
  password: joi .string() .min(6) .max(14)
}).required();

