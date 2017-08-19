interface Vehicle 
{
	wheel: number;
	fuel: string;
	color: string;

	getWheel(): number;
	getFuel(): string;
	getColor(): string;

	setWheel(id: number): void;
	setFuel(fuel: string): void;
	setColor(color: string): void;
}


class Car implements Vehicle
{
	wheel: number;
	fuel: string;
	color: string;

	constructor()
	{}

	getWheel(): number
	{
		return this.wheel;
	}
	getFuel(): string
	{
		return this.fuel;
	};
	getColor(): string
	{
		return this.color;
	};

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
}

class Motorcycle implements Vehicle
{
	wheel: number;
	fuel: string;
	color: string;
	deluxe:boolean;

	constructor()
	{}

	getWheel(): number
	{
		return this.wheel;
	}
	getFuel(): string
	{
		return this.fuel;
	};
	getColor(): string
	{
		return this.color;
	};
	getDeluxe(): boolean
	{
		return this.deluxe;
	};

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
	setDeluxe(deluxe: boolean): void
	{
		this.deluxe = deluxe;
	}
}

var car = new Car();

var moto = new Motorcycle();

car.setWheel(5);
car.setFuel('gas');
car.setColor('black');

moto.setWheel(3);
moto.setFuel('gasoline');
moto.setColor('red');
moto.setDeluxe(true);

console.log(car.getWheel());
console.log(car.getFuel());
console.log(car.getColor());

console.log('\n');

console.log(moto.getWheel());
console.log(moto.getFuel());
console.log(moto.getColor());
console.log(moto.getDeluxe());
