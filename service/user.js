const user_repository =require('../repositories/user')
const bcrypt = require('bcrypt')


class userService{
    static async register(req,res,next){
        // get dari user controller
        const {name, email, password} = req
        // bcrypt password
        const hashedPassword = bcrypt.hashSync(password, 8)
        const user = await user_repository.register({
            name,
            email,
            hashedPassword
        })

        return user
    }
}

module.exports = userService;
