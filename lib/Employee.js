class Employee {
    // employee info
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods for the employee 
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

}
module.exports = Employee;