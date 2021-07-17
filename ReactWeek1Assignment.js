class Student {
    constructor (name,email,community){
        this.name = name,
        this.email = email,
        this.community = community
    }
}

class Bootcamp {
    constructor(name,level,students = []) {
        this.name = name,
        this.level = level,
        this.students = students
    };
    registerStudent(newStudent) {
        const emailExists = this.students.filter(s => s.email === newStudent.email);
        if (emailExists.length == 0){
            this.students.push(newStudent);
            console.log(`Registering ${newStudent.email} to the bootcamp ${this.name}.`);
        }
        else {
            console.log("Record with this email already exists");
        }
        return this.students;
    }
    
}