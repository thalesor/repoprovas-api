import { prisma } from "../database.js";


export async function find(id: number) {
  return await prisma.term.findFirst({
    where: { id },
  });
}

export async function findAll() {
  return await prisma.term.findMany();
}

