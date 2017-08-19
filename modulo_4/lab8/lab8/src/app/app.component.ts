import { Component } from '@angular/core';

interface Person {
  id: number;
  age: number;
  name: string;
  lastName: string;
}

export class Student implements Person
{
	id: number;
  	age: number;
  	name: string;
  	lastName: string;
	classes: string;
	grade: number;
	group: string;

	constructor(id:number, age: number, name: string, lastName: string, classes: string,  grade: number, group: string)
	{
		//super(id, age, name, lastName);
		this.id = id;
		this.age = age;
	  	this.name =  name;
		this.lastName = lastName;
		this.classes = classes;
		this.grade = grade;
		this.group = group;
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "El producto del Año";

  estudiante: Student = {
    id: 2,
    age: 35,
    name: "Ferney",
    lastName: "Pérez",
    classes: "Apps",
   	grade: 1500000,
    group: 'pp'
  };
}
