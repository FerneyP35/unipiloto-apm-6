import { Component } from '@angular/core';
import {Estudiantes} from '../models/estudiantes';
import {Profesores} from '../models/profesores';

const ESTUDIANTES: Estudiantes[] = [
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

const PROFESORES: Profesores[] = [
  {
    id: 1,
    edad: 35,
    nombre: "Alirio",
    apellido: "Pereira",
    profesion: "ss",
    grado: 4,
    grupo: "ss"
  },
  {
    id: 2,
    edad: 25,
    nombre: "Adolfo",
    apellido: "Torres",
    profesion: "hh",
    grado: 5,
    grupo: "hh"
  },
  {
    id: 3,
    edad: 28,
    nombre: "Alicia",
    apellido: "Puentes",
    profesion: "jj",
    grado: 6,
    grupo: "jj"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleEstudiante: string = "Estudiantes";
  titleProfesor: string = "Profesores";


  selected: Estudiantes;

  estudiantes: Estudiantes[] = ESTUDIANTES;

  onSelectEstudiante(estudiante: Estudiantes){
    this.selected = estudiante;
  }


  selected2: Profesores;

  profesores: Profesores[] = PROFESORES;

  onSelectProfesor(profesor: Profesores){
    this.selected2 = profesor;
  }
}