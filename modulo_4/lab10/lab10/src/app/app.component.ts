import { Component } from '@angular/core';

export class Vehiculo 
{
  marca: string;
  modelo: string;
  color: string;
  placa: string;
  capacidad: string;
  annoFabricacion: number;
} 

export class Conductor 
{
  id: number;
  licensia: number;
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Vehículos";

  vehiculos: Vehiculo[] = PRODUCTS;

  conductores: Conductor[] = CHOFER;

}


const PRODUCTS: Vehiculo[] = [
  {
    marca: "Marca1",
  	modelo: "Modelo1",
  	color: "Color1",
  	placa: "Placa1",
  	capacidad: "Capacidad1",
  	annoFabricacion: 1999
  },
  {
    marca: "Marca2",
  	modelo: "Modelo2",
  	color: "Color2",
  	placa: "Capacidad2",
  	capacidad: "Marca2",
  	annoFabricacion: 2015
  },
  {
    marca: "Marca3",
	modelo: "Modelo3",
	color: "Color3",
	placa: "Placa3",
	capacidad: "Capacidad3",
	annoFabricacion: 2005
  }
];

const CHOFER: Conductor[] = [
  {
    id: 1,
  	licensia: 123,
  	nombre: "Ferney",
  	apellido: "Pérez",
  	edad: 35
  },
  {
    id: 2,
  	licensia: 456,
  	nombre: "C2",
  	apellido: "CP2",
  	edad: 35
  },
  {
    id: 3,
  	licensia: 789,
  	nombre: "C3",
  	apellido: "CP3",
  	edad: 35
  }
];