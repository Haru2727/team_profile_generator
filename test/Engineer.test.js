const Engineer = require("../lib/engineer");

describe("Engineer Class", () => {
    it("Engineer instance", () => {
        const engg = new Engineer('Arash', '123', 'test@test.com', 'haru2727');
        expect(engg.name).toBe("Arash");
        expect(engg.id).toBe("123");
        expect(engg.email).toBe("test@test.com");
        expect(engg.github).toBe("haru2727");
      });
    });