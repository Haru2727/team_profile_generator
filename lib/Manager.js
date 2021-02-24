// retreive the Employee module class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, email, office_number){
        super(name,id,title,email);
        this.office_number = office_number;
    }


    getNumber(){
        return this.office_number;
    }
}

module.exports = Manager;