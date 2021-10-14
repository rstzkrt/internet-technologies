class Person{
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    get name(){
        return `${this._name} ${this._surname}`;
    }

    set name(string){
        this._name=string.split(" ")[0];
        this._surname=string.split(" ")[1];
    }
}

class Student extends Person{

}

let student1=new Student("resat","ozkurt");

student1.name="NewResat NewOzkurt"
console.log(student1.name)