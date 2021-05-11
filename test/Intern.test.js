  
const Intern = require("../lib/intern");

describe("Intern Class", () => {
    it("Intern instance", () => {
        const int = new Intern('John Wick', '123', 'test@test.com', 'GeorgiaTech');
        expect(int.name).toBe("John Wick");
        expect(int.id).toBe("123");
        expect(int.email).toBe("test@test.com");
        expect(int.school).toBe("GeorgiaTech");
      });
    });