const person = {
    firstName:"Resat",
    lastName:"Ozkurt",
    age:22,
    eyeColor:"Brown",
    languages:["Turkish","English"],
    getFirstName:function() {
        return this.firstName;
    },
    setFirstName:function(string) {
        this.firstName=string;
    },
    getAge:function() {
        return this.age;
    },
    setAge:function(num) {
        this.age=num;
    },
    toString: function() {
        return this.firstName + " " + this.lastName+ " " + this.age+ " " + this.eyeColor+ " " + this.languages;
    }
};
person.setFirstName("NewName")
console.log(person.getFirstName())

console.log(person.getAge())

function printObjectProperties(object) {
    if(typeof object === 'object'){
        Object.values(object).forEach(prop => console.log(`${typeof prop}= `+prop));
    }
    console.log("the parameter in not type of an object")
    //to retrieve keys Object.keys(object)
    //to retrieve values Object.values(object)

}
printObjectProperties(person);