import { Component } from '@angular/core';

export class Teacher {
  id: number;
  age: number;
  name: string;
  lastName: string;
  profession: string;
  grades: number;
  groups: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los profesores";

  selected: Teacher;

  profesores: Teacher[] = PRODUCTS;

  onSelect(profesor: Teacher){
    this.selected = profesor;
  }
}

const PRODUCTS: Teacher[] = [
  {
    id: 1,
    age: 33,
    name: "Juan",
    lastName: "Perez",
    profession: "Ing sistemas",
    grades: 1,
    groups: '4'
  },
  {
    id: 2,
    age: 13,
    name: "Alvaro",
    lastName: "Huertas",
    profession: "Ing software",
    grades: 15,
    groups: '7'
  },
  {
    id: 3,
    age: 23,
    name: "Roberto",
    lastName: "Gomez",
    profession: "Ing Telecomunicaciones",
    grades: 10,
    groups: '8'
  }
];