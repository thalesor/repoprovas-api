import { prisma } from "../database.js";

export async function findByDisciplineId(id: number) {
    return prisma.test.findMany({
      select: {
        id: true,
        name: true,
        category: { 
            select: 
            { name: true } 
        },
        disciplineTeacher: { 
            select: 
            { teacher: true }
        }
      },
    });
  }

export async function findAll() {
  return await prisma.discipline.findMany();
}


