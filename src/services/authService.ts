import * as userRepository from "../repositories/userRepository.js";
import * as sessionRepository from "../repositories/sessionRepository.js";
import { compareSync } from "bcrypt";
import { User } from "@prisma/client";
import { Session } from "@prisma/client";
import jwt from 'jsonwebtoken';

export type authData = Omit<User, "id" | "createdAt">;
export type sessionData = Omit<Session, "id">;

export async function signIn(auth: authData) {
    const user = await userRepository.findByEmail(auth.email);
    if(!user)
        throw { type: "not_found", message:"não há usuários com o email digitado"};
    else if(!compareSync(auth.password, user.password))
        throw { type: "conflict", message:"a senha digitada está errada"};
    else
    {
        console.log(`user is: ${user}`);
        const session = await sessionRepository.insert(user.id);
        const key = process.env.JWT_SECRET;
        
        const config = { expiresIn: 60*60*3 }
        const token = jwt.sign({sessionId: session.id}, key, config);

        delete(user.password);
        delete(user.email);
        delete(user.id);

        const storage = {
            ...user,
            token: token
        }

        return storage;
    }
}

export async function getSession(sessionId: number) {
    
  const session = await sessionRepository.find(sessionId);
  if(!session)
    throw {type: "not_found", message:"Não foi possível recuperar a sessão do usuário"}
  return session;
}



