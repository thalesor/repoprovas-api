import { prisma } from "../database.js";

export async function findByTerm(termId: number) {
  return await prisma.discipline.findMany({
    where: { termId },
  });
}

export async function findAll() {
  return await prisma.discipline.findMany();
}


