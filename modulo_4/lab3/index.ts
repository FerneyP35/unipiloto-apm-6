class Person
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

	setId(id: number): void
	{
		this.id = id;
	}

	setAge(age: number): void
	{
		this.age = age;
	}

	setName(name: string): void
	{
		this.name = name;
	}

	setLastName(lastName: string): void
	{
		this.lastName = lastName;
	}



	getId(): number
	{
		return this.id;
	}

	getAge(): number
	{
		return this.age;
	}

	getName(): string
	{
		return this.name;
	}

	getLastName(): string
	{
		return this.lastName;
	}

}

class Student extends Person
{
	classes: Array<string>;
	grade: number;
	group: string;

	constructor(id:number, age: number, name: string, lastName: string, classes: Array<string>,  grade: number, group: string)
	{
		super(id, age, name, lastName);
		this.classes = classes;
		this.grade = grade;
		this.group = group;
	}

	setClasses(classes: Array<string>): void
	{
		this.classes = classes;
	}

	setGrades(grade: number): void
	{
		this.grade = grade;
	}

	setGroups(group: string): void
	{
		this.group = group;
	}



	getClasses(): Array<string>
	{
		return this.classes;
	}

	getGrade(): number
	{
		return this.grade;
	}

	getGroup(): string
	{
		return this.group;
	}
}


class Teacher extends Person
{
	profession: string;
	grades: Array<number>;
	groups: Array<string>;
	//students: Array<string>;

	constructor(id:number, age: number, name: string, lastName: string, profession: string,  grades: Array<number>, groups: Array<string>/*, students: Array<string>*/)
	{
		super(id, age, name, lastName);
		this.profession = profession;
		this.grades = grades;
		this.groups = groups;
		//this.students = students;
	}

	setProfession(profession: string): void
	{
		this.profession = profession;
	}

	setGrades(grades: Array<number>): void
	{
		this.grades = grades;
	}

	setGroups(groups: Array<string>): void
	{
		this.groups = groups;
	}



	getProfession(): string
	{
		return this.profession;
	}

	getGrades(): Array<number>
	{
		return this.grades;
	}

	getGroups(): Array<string>
	{
		return this.groups;
	}
}


var student = new Student(1, 35, 'Ferney', 'Pérez', ['Desarrollo Apps'], 5, 'G1');
var student2 = new Student(2, 34, 'Madelen', 'Pérez', ['Química'], 7, 'G2');
var student3 = new Student(3, 33, 'Rocio', 'Pérez', ['Contaduria'], 6, 'G3');

var teacher = new Teacher(11, 32, 'Alejandro', 'Romero', 'Ing Sistemas', [5, 6, 7], ['G1', 'G2', 'G3']);
var teacher2 = new Teacher(12, 30, 'Julian', 'Valero', 'Ing Sistemas', [5, 6, 7], ['G1', 'G2', 'G3']);
var teacher3 = new Teacher(13, 38, 'Carlos', 'Amaya', 'Ing Sistemas', [5, 6, 7], ['G1', 'G2', 'G3']);

console.log(student);
console.log('\n');
console.log(student2);
console.log('\n');
console.log(student3);

console.log('\n');
console.log(teacher);
console.log('\n');
console.log(teacher2);
console.log('\n');
console.log(teacher3);