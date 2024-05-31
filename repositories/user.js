const { User } = require('../models')

class userRepository{
    static async register(req,res,next){        
        try {
            const {name, email, hashedPassword} = req
            const user = await User.create({
                name,
                email,
                password: hashedPassword
            });

            return user
        } catch (error) {
            next(error);
        }
    }
}

module.exports = userRepository;