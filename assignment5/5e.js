class Student {
    constructor(name, surname, id, grades) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.grades = grades;
        this.avgGrades = Math.floor(this.grades.reduce((a, b) => (a + b)) / this.grades.length);
    }
    studentInfo() {
        console.log(`First name: ${this.name} Surname: ${this.surname} AverageGrade: ${ Math.floor(this.grades.reduce((a, b) => (a + b)) / this.grades.length) }`);
    }
    getAvgGrade = function () {
        return this.avgGrades
    }
    getName = function () {
        return this.name
    }
    setName = function (str) {
        this.name=str;
    }
    getSurname = function () {
        return this.surname
    }
    setSurname = function (str) {
        this.surname=str
    }
    setFullName = function (firstName,lastName) {
        this.surname=lastName;
        this.name=firstName;
    }
    getFullName = function () {
        return `${this.name} ${this.surname} `
    }
}

let student=new Student('resat','ozkurt',22,[5,6,7]);

student.setName("NewName")
console.log(student.getName())
student.setSurname("NewSurname")
console.log(student.getSurname())
console.log(student.getAvgGrade())

console.log(student.getFullName())

student.studentInfo()