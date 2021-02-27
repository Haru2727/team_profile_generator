// retreive the Employee module class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, title, email, school){
        super(name, title, id, email);
        this.school = school;
    }
    // returns the interns school
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;