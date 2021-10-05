class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    setFullName = function (firstName,lastName) {
        this.name=firstName;
        this.surname=lastName;
    }
    getFullName = function () {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person{

}

let student1=new Student("resat","ozkurt");

student1.setFullName("NewResat","NewOzkurt")
console.log(student1.getFullName())