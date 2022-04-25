import { Response, response } from "express";

type AppErrorTypes = "conflict" | "not_found";
export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function missingInputError(input: string[], res: Response) {
  let responseMessage = `O app precisa que sejam informados itens, pode estar faltando tanto  `;
  responseMessage+= input.join(" quanto ");
  return res.status(401).send(responseMessage);
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
  if (type === "conflict") return 409;
  if (type === "not_found") return 404;
  return 400;
}
