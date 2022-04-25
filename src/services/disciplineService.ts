import * as disciplineRepository from "../repositories/disciplineRepository.js";

export async function getAll(termId: number) {
    
 return await disciplineRepository.findByTerm(termId);
}



