import * as userService from "../services/userService.js";
import { missingInputError } from "../utils/errorUtils.js";
import { Request, Response } from "express";

export async function create(req: Request, res: Response) {
  
    const { email, password, repassword, name, imageUrl  } = req.body;
    
    if(!email || !password || !repassword)
      return missingInputError(["email", "senha", "confirmação da senha", "nome"], res);

      const newUser = {email, password, name, imageUrl};
      await userService.create(newUser);

      return res.status(201).send("usuário criado com sucesso");
}

export async function geUserId(req: Request, res: Response) {
  
  const { userId } = res.locals;
  
  return res.status(200).send({userId: userId});

}

export async function getAll(req: Request, res: Response) {
  
  const { id } = req.params;
  
  const usersList = await userService.getAll();
  return res.status(200).send(usersList);

}

