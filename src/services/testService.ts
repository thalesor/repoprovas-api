import * as testRepository from "../repositories/testRepository.js";

export async function getByDiscipline(disciplineId: number) {
    
 return await testRepository.findByDisciplineId(disciplineId);
}



