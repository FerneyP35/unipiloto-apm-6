import { Component } from '@angular/core';

class Vehicle 
{
	wheel: number;
	fuel: string;
	color: string;

	constructor(wheel: number, fuel: string, color: string = 'white'){
		this.color = color;
		this.fuel = fuel;
		this.wheel = wheel;
	}

	setWheel(wheel: number): void
	{
		this.wheel = wheel;
	}

	setFuel(fuel: string): void
	{
		this.fuel = fuel;
	}

	setColor(color: string): void
	{
		this.color = color;
	}


	getWheel(): number
	{
		return this.wheel;
	}

	getFuel(): string
	{
		return this.fuel;
	}

	getColor(): string
	{
		return this.color;
	}

}

var car = new Vehicle(4, 'gas', 'red');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cWheel = car.getWheel();
  cFuel = car.getFuel();
  cColor = car.getColor();
}
