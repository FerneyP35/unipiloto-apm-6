import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Profesor} from "../models/profesor";

export class InMemoryProductService implements InMemoryDbService {
  createDb() {
    let profesores: Array<Profesor> = [
      {
        id: 1,
        edad: 33,
        nombre: "Juan",
        apellido: "Pérez",
        profesion: "Ingeniero",
        grados: 15,
        grupos: "a20"
      },
      {
        id: 1,
        edad: 35,
        nombre: "Alice",
        apellido: "Castro",
        profesion: "Arquitecto",
        grados: 1,
        grupos: "b10"
      },
      {
        id: 1,
        edad: 23,
        nombre: "Carlos Andres",
        apellido: "Memes",
        profesion: "Abogado",
        grados: 15,
        grupos: "v50"
      }
    ];

    return {profesores};
  }

}
