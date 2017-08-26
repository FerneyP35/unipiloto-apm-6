import { Component, OnInit } from '@angular/core';
import { Profesores } from '../models/personas';

const PROFESORES: Profesores[] = [
  {
    id: 1,
    edad: 35,
    nombre: "Carlos",
    apellido: "Amaya",
    profesion: "ss",
    grado: 4,
    grupo: "ss"
  },
  {
    id: 2,
    edad: 25,
    nombre: "Julián",
    apellido: "Alvarez",
    profesion: "hh",
    grado: 5,
    grupo: "hh"
  },
  {
    id: 3,
    edad: 28,
    nombre: "Alcia",
    apellido: "Alvarado",
    profesion: "jj",
    grado: 6,
    grupo: "jj"
  }
];

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit 
{
  	constructor() { }

  	ngOnInit() {
  	}
	titleProfesor = "Página Profesores";

	selected: Profesores;

  	profesores: Profesores[] = PROFESORES;

  	onSelectProfesor(profesor: Profesores)
  	{
    	this.selected = profesor;
  	}
}
