import joi from "joi";

export const userInsertSchema = joi.object({
  email: joi .string() .min(6) .email() .required(),
  password: joi .string() .min(6) .max(14) .required(),
  repassword: joi .string() .min(6) .max(14) .valid(joi.ref('password')) .required(),
  imageUrl: joi .string(),
  name: joi .string() .min(2) .required()
});

