import { prisma } from "../database.js";
import { createUserData } from "../services/userService.js";

export async function findByEmail(email: string) {
  return await prisma.user.findFirst({
    where: { email },
  });
}

export async function find(id: number) {
  return await prisma.user.findFirst({
    where: { id },
  });
}

export async function findAll() {
  return await prisma.user.findMany();
}


export async function insert(userData: createUserData) {
  await prisma.user.create({
    data: userData,
  });
}
