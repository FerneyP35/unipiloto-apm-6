import { Component } from '@angular/core';

interface Person
{
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
		this.id = id;
		this.age = age;
		this.name = name;
		this.lastName = lastName;
		this.classes = classes;
		this.grade = grade;
		this.group = group;
	}
}


/*export class Teacher implements Person
{
	profession: string;
	grades: number;
	groups: string;

	constructor(){}

}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laboratorio 7';

  estudiante : Student =
  {
  	id : 1,
	age : 35,
	name : 'Ferney',
	lastName : 'Pérez',
	classes : 'Apps',
	grade : 3,
	group : 'qqqq'
  };

  //public estudiante : Student = new Student(2, 34, 'Madelen', 'Pérez', 'Química', 7, 'G2');

}
