const User = require('./../../app/models/User');

describe("Unit Tests for User Class", () => {
    test('1) Create a User objet', () => {
        const user = new User(1, "paola_daft", "Paola", "Bio")
        expect(user.id).toBe(1);
        expect(user.username).toBe("paola_daft");
        expect(user.name).toBe("Paola");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test ("Add getters", () =>{
        const user = new User(1,"paola_daft", "Paola", "bio")
        expect(user.getUsername).toBe("paola_daft")
        expect(user.getBio).toBe("bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
})
