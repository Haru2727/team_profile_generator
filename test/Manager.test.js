const Manager = require("../lib/manager");

describe("Manager Class", () => {
    it("Manager instance", () => {
        const mngr = new Manager('John Wick', '123', 'test@test.com', '5555555');
        expect(mngr.name).toBe("John Wick");
        expect(mngr.id).toBe("123");
        expect(mngr.email).toBe("test@test.com");
        expect(mngr.officeNumber).toBe("5555555");
    });
});