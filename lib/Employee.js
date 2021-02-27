// constructor function need here to get the 
// id, name, email, title
class Employee {
    constructor(name, title, id, email) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.email = email;
    }
    // returns the name
    getName() {
        return this.name;
    };
       // returns employee role
       getRole() {
        return this.title;
    };
    // returns the id number
    getId() {
        return this.id;
    };
    // returns the email
    getEmail() {
        return this.email;
    };
 
}

module.exports = Employee;