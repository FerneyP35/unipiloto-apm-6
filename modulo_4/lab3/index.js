var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(id, age, name, lastName) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastName = lastName;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, age, name, lastName, classes, grade, group) {
        _super.call(this, id, age, name, lastName);
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Student.prototype.setGrades = function (grade) {
        this.grade = grade;
    };
    Student.prototype.setGroups = function (group) {
        this.group = group;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, age, name, lastName, profession, grades, groups) {
        _super.call(this, id, age, name, lastName);
        this.profession = profession;
        this.grades = grades;
        this.groups = groups;
    }
    Teacher.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Teacher.prototype.setGrades = function (grades) {
        this.grades = grades;
    };
    Teacher.prototype.setGroups = function (groups) {
        this.groups = groups;
    };
    Teacher.prototype.getProfession = function () {
        return this.profession;
    };
    Teacher.prototype.getGrades = function () {
        return this.grades;
    };
    Teacher.prototype.getGroups = function () {
        return this.groups;
    };
    return Teacher;
}(Person));
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
