const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {

    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, "paola_daft", "Paola")
        expect(user.id).toBe(1);
        expect(user.username).toBe("paola_daft");
        expect(user.name).toBe("Paola");
        expect(user.bio).not.toBeUndefined();
    });

    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, "paola_daft", "Paola")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("paola_daft");
        expect(userInfoInList[2]).toBe("Paola");
        expect(userInfoInList[3]).toBe("sin bio");
    });

    test('3. Update username', () => {
        const user = UserService.create(1, "paola_daft", "Paola")
        UserService.updateUserUsername(user, "PaolaDaft")
        expect(user.username).toBe("PaolaDaft");
    });

    test('4. Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1, "paola_daft1", "Paola")
        const user2 = UserService.create(1, "paola_daft2", "Paola")
        const user3 = UserService.create(1, "paola_daft3", "Paola")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("paola_daft1");
        expect(usernames).toContain("paola_daft2");
        expect(usernames).toContain("paola_daft3");
    });
});
