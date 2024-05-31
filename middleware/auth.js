const { User } = require('../models')
const bcrypt = require('bcrypt')


async function auth(req, res, next){
    // destructering
    const {email,password}= req.headers;

    if(!email || !password){
        return res.status(401).json({
            message: 'Email and Password required!'
        })
    }
    try {
        const user = await User.findOne({
            where: {email}
        })
        if(!user || !bcrypt.compareSync(password, user.password)){
            return res.status(401).json({
                message: 'Invalid Credential'
            })
        }

        req.user = user;
        next();
    } catch (error) {
        // catch apabila terdapat error
        next(error)
    }
}
module.exports =auth;