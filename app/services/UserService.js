const User = require('./../models/User')

class UserService {
    static create (id, username, name) {
        return new User(id, username, name, "sin bio")
    }

    static getInfo(user) {
        return Object.values(user).slice(0, 4)
    }

    static updateUserUsername (user, newUsername){
        user.username = newUsername
    }
}

module.exports = UserService