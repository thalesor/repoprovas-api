import * as authService from "../services/authService.js";
import { missingInputError } from "../utils/errorUtils.js";
import { Request, Response } from "express";

export async function signIn(req: Request, res: Response) {
  
    const { email, password  } = req.body;
    
    if(!email || !password)
      return missingInputError(["email", "senha"], res);
    
      const authReturnData = await authService.signIn({...req.body});
      
      return res.status(200).send(authReturnData);
}


