import * as termRepository from "../repositories/termRepository.js";

export async function getAll() {
    
 return await termRepository.findAll();
}



