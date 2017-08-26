import { Component } from '@angular/core';
import {Estudiantes} from '../models/estudiantes';

const ESTUDIANTES: Estudiantes[] = [
  {
    id: 1,
    edad: 35,
    nombre: "Ferney",
    apellido: "Pérez"
  },
  {
    id: 2,
    edad: 25,
    nombre: "Carlos",
    apellido: "Alba"
  },
  {
    id: 3,
    edad: 28,
    nombre: "Alba",
    apellido: "Ruiz"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Estudiantes";

  selected: Estudiantes;

  estudiantes: Estudiantes[] = ESTUDIANTES;

  onSelect(estudiante: Estudiantes){
    this.selected = estudiante;
  }
}