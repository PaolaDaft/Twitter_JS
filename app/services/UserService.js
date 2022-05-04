const User = require('./../models/User')

class UserService {
    static create (id, username, name) {
        return new User(id, username, name, "sin bio")
    }

    static getInfo(userObject) {
        return Object.values(userObject).slice(0, 4)
    }

    static updateUserUsername (userObject, newUsername){
        userObject.username = newUsername
    }
    
    static getAllUsernames (usersObjectsList){
        return usersObjectsList.map(user => user.username)
    }
}

module.exports = UserService