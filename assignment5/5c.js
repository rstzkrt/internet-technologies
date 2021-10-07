function Student() {
    this.courseList = ['ZPR', 'TIN', 'BYT']
}

Student.prototype.id=2
Student.prototype.name='resat'
Student.prototype.surname="ozkurt"
let student2=new Student();
student2.surname="NewSurname"

// function StudentAddPrototype(id,name,surname) {
//     const student = new Student()
//     student.id = id
//     student.name = name
//     student.surname = surname
//
//     return student
// }
//
// const student1 = new StudentInit(1,'resat','ozkurt')
// console.log(student1.id)
// console.log(student1.name)
// console.log(student1.surname)
// console.log(student1.courseList)


console.log(student2.id)
console.log(student2.name)
console.log(student2.surname)
console.log(student2.courseList)