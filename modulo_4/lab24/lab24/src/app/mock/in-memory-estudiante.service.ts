import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Estudiante} from "../models/estudiante";

export class InMemoryEstudianteService implements InMemoryDbService {
  createDb() {
    let estudiantes: Array<Estudiante> = [
      {
        id: 1,
        edad: 35,
        nombre: "Ferney",
        apellido: "Pérez",
        clases: "ss",
        grado: 4,
        grupo: "ss"
      },
      {
        id: 2,
        edad: 25,
        nombre: "Carlos",
        apellido: "Alba",
        clases: "hh",
        grado: 5,
        grupo: "hh"
      },
      {
        id: 3,
        edad: 28,
        nombre: "Alba",
        apellido: "Ruiz",
        clases: "jj",
        grado: 6,
        grupo: "jj"
      }
    ];

    return {estudiantes};
  }

}

