import { Component, OnInit } from '@angular/core';
import { Estudiantes } from '../models/personas';

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

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit 
{
	constructor() { }

  	ngOnInit() {
  	}
  	
	titleEstudiante = "Página Estudiantes";

	selected: Estudiantes;

  	estudiantes: Estudiantes[] = ESTUDIANTES;

  	onSelectEstudiante(estudiante: Estudiantes)
  	{
    	this.selected = estudiante;
  	}

  	

}
