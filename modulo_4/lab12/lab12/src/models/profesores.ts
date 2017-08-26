interface Persona
{
  id: number;
  edad: number;
  nombre: string;
  apellido: string;
  
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