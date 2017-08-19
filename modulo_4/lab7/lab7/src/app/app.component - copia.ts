import { Component } from '@angular/core';

export class Person
{
	id: number;
	age: number;
	name: string;
	lastName: string;

	constructor(id: number, age: number, name: string, lastName: string)
	{
		this.id = id;
		this.age = age;
		this.name = name;
		this.lastName = lastName;
	}

}

export class Student extends Person
{
	classes: string;
	grade: number;
	group: string;

	constructor(id:number, age: number, name: string, lastName: string, classes: string,  grade: number, group: string)
	{
		super(id, age, name, lastName);
		this.classes = classes;
		this.grade = grade;
		this.group = group;
	}
}


export class Teacher extends Person
{
	profession: string;
	grades: Array<number>;
	groups: Array<string>;

	constructor(id:number, age: number, name: string, lastName: string, profession: string,  grades: Array<number>, groups: Array<string>)
	{
		super(id, age, name, lastName);
		this.profession = profession;
		this.grades = grades;
		this.groups = groups;
	}

}

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

  public estudiante2 : Student = new Student(2, 34, 'Madelen', 'Pérez', 'Química', 7, 'G2');

}
