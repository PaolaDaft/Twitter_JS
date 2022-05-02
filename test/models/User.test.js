const User = require('./../../app/models/User');

describe("Unit Tests for User Class", () => {
    test('1) Create a User objet', () => {
        const user = new User(1, "paola_daft", "Paola", "Bio1", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1);
        expect(user.username).toBe("paola_daft");
        expect(user.name).toBe("Paola");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdate).toBe("lastUpdate")
    });
})