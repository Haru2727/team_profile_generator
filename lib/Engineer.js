// retreive the Employee module class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, title, github){
        super(name, id, title, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;