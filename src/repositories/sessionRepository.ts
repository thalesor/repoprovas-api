import { prisma } from "../database.js";
import { sessionData } from "../services/authService.js";

export async function find(id: number) {
  return prisma.session.findFirst({
    where: { id },
  });
}

export async function insert(userId: number) {
  console.log(`the user id in session is ${userId}`)
  const created = await prisma.session.create({
    data: {userId},
  });
  return created;
}
