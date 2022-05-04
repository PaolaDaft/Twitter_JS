const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {
    test('1. Create a new user using the UserService', () => {
        const user = new UserService.create(1, "paola_daft", "Paola")
        expect(user.username).toBe("paola_daft");
        expect(user.name).toBe("Paola");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });
})
