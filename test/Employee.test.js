const Employee = require("../lib/employee");

describe("Employee Class", () => {
    it("Employee instance", () => {
        const emp = new Employee('John Wick', '123', 'test@test.com');
        expect(emp.name).toBe("John Wick");
        expect(emp.id).toBe("123");
        expect(emp.email).toBe("test@test.com");
      });
    });