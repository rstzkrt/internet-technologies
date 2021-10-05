function Student(name, surname, id, grades){
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.studentInfo = function () {
        console.log(`First name: ${this.name} Surname: ${this.surname} AverageGrade: ${ Math.floor(this.grades.reduce((a, b) => (a + b)) / this.grades.length) }`);
    };
}

const student=new Student('resat','ozkurt',22,[5,15,125]);
student.studentInfo()