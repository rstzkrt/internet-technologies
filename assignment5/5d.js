function Student(name, surname, id, grades){
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.avgGrades = Math.floor(this.grades.reduce((a, b) => (a + b)) / this.grades.length);
    this.studentInfo = function () {
        console.log(`First name: ${this.name} Surname: ${this.surname} AverageGrade: ${ this.avgGrades }`);
    };
    this.getAvgGrade = function () {
        return this.avgGrades
    };
    this.getName = function () {
        return this.name
    };
    this.setName = function (str) {
        this.name=str;
    };
    this.getSurname = function () {
        return this.surname
    };
    this.setSurname = function (str) {
        this.surname=str
    };
    this.setFullName = function (firstName,lastName) {
        this.surname=lastName;
        this.name=firstName;
    };
    this.getFullName = function () {
        return `${this.name} ${this.surname} `
    };
}

let student=new Student('resat','ozkurt',22,[5,15,125]);
student.setName("NewName")
console.log(student.getName())
student.setSurname("NewSurname")
console.log(student.getSurname())
console.log(student.getAvgGrade())

console.log(student.getFullName())

student.studentInfo()