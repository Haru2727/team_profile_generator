// retreive the Employee module class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, role, id, email);
        this.github = github;
    }
    // returns the engineers github username
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
