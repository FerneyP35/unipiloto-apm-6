﻿interface Persona
{
  id: number;
  edad: number;
  nombre: string;
  apellido: string;
  
}


export class Estudiantes implements Persona
{
  	id: number;
  	edad: number;
  	nombre: string;
  	apellido: string;
	clases: string;
	grado: number;
	grupo: string;

	constructor(id:number, edad: number, nombre: string, apellido: string, clases: string,  grado: number, grupo: string)
	{
		this.id = id;
		this.edad = edad;
		this.nombre = nombre;
		this.apellido = apellido;
		this.clases = clases;
		this.grado = grado;
		this.grupo = grupo;
	}
}
