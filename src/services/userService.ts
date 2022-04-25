import * as userRepository from "../repositories/userRepository.js";
import { hashSync } from "bcrypt";
import { User } from "@prisma/client";

export type createUserData = Omit<User, "id" | "createdAt">;

async function ensureIsUniqueEmail(email: string) {
  const user = await userRepository.findByEmail(email);
  if(user)
    throw { type: "conflict", message:"Esse email já está sendo utilizado"};
  return user;
}

export async function create(user: createUserData) {
    
    await ensureIsUniqueEmail(user.email);
    user.password = hashSync(user.password, 10);
    await userRepository.insert(user);
}

export async function getAll() {
    
 return await userRepository.findAll();
}



