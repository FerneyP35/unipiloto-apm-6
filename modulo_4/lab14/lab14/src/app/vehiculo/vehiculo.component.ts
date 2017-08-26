import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../models/personas';


const VEHICULOS: Vehiculos[] = [
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

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit 
{
  	constructor() { }

  	ngOnInit() {
  	}

	titleVehiculo = "Página Vehículos"

	selected: Vehiculos;

  	Vehiculos: Vehiculos[] = VEHICULOS;

  	onSelectVehiculo(vehiculo: Vehiculos)
  	{
    	this.selected = vehiculo;
  	}
}
