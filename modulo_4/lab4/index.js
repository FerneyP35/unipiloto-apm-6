var Car = (function () {
    function Car() {
    }
    Car.prototype.getWheel = function () {
        return this.wheel;
    };
    Car.prototype.getFuel = function () {
        return this.fuel;
    };
    ;
    Car.prototype.getColor = function () {
        return this.color;
    };
    ;
    Car.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Car.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    return Car;
}());
var Motorcycle = (function () {
    function Motorcycle() {
    }
    Motorcycle.prototype.getWheel = function () {
        return this.wheel;
    };
    Motorcycle.prototype.getFuel = function () {
        return this.fuel;
    };
    ;
    Motorcycle.prototype.getColor = function () {
        return this.color;
    };
    ;
    Motorcycle.prototype.getDeluxe = function () {
        return this.deluxe;
    };
    ;
    Motorcycle.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Motorcycle.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Motorcycle.prototype.setColor = function (color) {
        this.color = color;
    };
    Motorcycle.prototype.setDeluxe = function (deluxe) {
        this.deluxe = deluxe;
    };
    return Motorcycle;
}());
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
