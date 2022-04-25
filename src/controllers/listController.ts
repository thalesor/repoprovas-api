import * as termService from "../services/termService.js";
import * as disciplineService from "../services/disciplineService.js";
import * as testService from "../services/testService.js";
import { missingInputError } from "../utils/errorUtils.js";
import { Request, Response } from "express";


export async function mountList(req: Request, res: Response) {

  const { type } = req.params;
  
  const data = await termService.getAll();
  const terms = data.map(item => { return {...item, disciplines: []} });
  //const tests = [];
  for(const term of terms)
  {
    term.disciplines = await disciplineService.getAll(term.id);
    /*term.disciplines.forEach(async discipline => {
      const data = await testService.getByDiscipline(discipline.id);
      tests.push(data);
    })*/
  }

  
  

  return res.status(200).send(terms);
}






