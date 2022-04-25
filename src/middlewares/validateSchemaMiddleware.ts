import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      throw {type: "conflict", message: validation.error.message}
    }

    next();
  };
}
