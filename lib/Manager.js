// retreive the Employee module class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, email, office_number){
        super(name, title, id, email);
        this.office_number = office_number;
    }

    // returns the managers office number
    getNumber(){
        return this.office_number;
    }
}

module.exports = Manager;