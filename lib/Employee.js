// constructor function need here to get the 
// id, name, email, title
class Employee {
    constructor(name, id, email, title) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.email = email;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    // returns employee
    getRole() {
        return this.title;
    };

}

module.exports = Employee;