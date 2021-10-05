function Student() {
    this.courseList = ['ZPR', 'TIN', 'BYT']
}

function StudentInit(id,name,surname) {
    const student = new Student()
    student.id = id
    student.name = name
    student.surname = surname

    return student
}

const student1 = new StudentInit(1,'resat','ozkurt')
console.log(student1.id)
console.log(student1.name)
console.log(student1.surname)
console.log(student1.courseList)