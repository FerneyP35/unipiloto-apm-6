import { Injectable } from '@angular/core';
import { ESTUDIANTES} from "../mock/estudiante-mock";

@Injectable()
export class EstudianteService {

  getEstudiante(){
    return Promise.resolve(ESTUDIANTES);
  }

}
