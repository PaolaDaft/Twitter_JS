const UserService = require('./../services/UserService')

class UserView {
    static createUser(payload){
        if (!payload) {
            return { error: 'payload no existe' }
        }else if (typeof payload.userName !== 'string' & typeof payload.name !== 'string' & typeof payload.id !== 'number'){
            return { error: 'necesitan tener un valor válido' }
        }

    }
    
}
module.exports = UserView
