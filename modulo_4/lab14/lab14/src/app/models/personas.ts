interface Persona
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


export class Profesores implements Persona
{
  	id: number;
  	edad: number;
  	nombre: string;
  	apellido: string;
  	profesion: string;
	grado: number;
	grupo: string;

	constructor(id:number, edad: number, nombre: string, apellido: string, profesion: string,  grado: number, grupo: string)
	{
		this.id = id;
		this.edad = edad;
		this.nombre = nombre;
		this.apellido = apellido;
		this.profesion = profesion;
		this.grado = grado;
		this.grupo = grupo;
	}
}

export class Vehiculos 
{
  marca: string;
  modelo: string;
  color: string;
  placa: string;
  capacidad: string;
  annoFabricacion: number;

  constructor(marca:string, modelo: string, color: string, placa: string, capacidad: string,  annoFabricacion: number)
	{
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.placa = placa;
		this.capacidad = capacidad;
		this.annoFabricacion = annoFabricacion;
	}
} 