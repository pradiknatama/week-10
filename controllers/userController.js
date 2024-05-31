const { User } = require('../models')
const bcrypt = require('bcrypt')
const user_service = require('../service/user')

class userController {
    static async register(req, res, next) {
        const { name, email, password } = req.body;
        // untuk bcrypt password
        try {
            const user = await user_service.register(
                {
                    name,
                    email,
                    password
                }
            )
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
        
    }
    static async login(req, res, next) {
        const {  email, password } = req.body;
        try {
            const user = await User.findOne({
                where: {email}
            })
            if(!user || !bcrypt.compareSync(password, user.password)){
                return res.status(401).json({
                    message: 'Invalid Credential'
                })
            }

            return res.status(200).json({
                message: 'Login Success'
            })
        } catch (error) {

        }
    }

    static async get(req, res, next) {
        const {page=1, limit= 5}=req.query;
        const offset = (page-1)*limit;
        try {
            const data = await User.findAndCountAll({
                limit:parseInt(limit),
                offset:parseInt(offset)
            });
            res.status(200).json({
                totalItems: data.count,
                totalPages: Math.ceil(data.count / limit),
                currentPage: parseInt(page),
                users:data.rows
            })
        } catch (error) {
            next(error)
        }
        
    }

    static async getOne(req, res, next) {
        const { id } = req.params
        // const data = await User.findByPk(id)
        const data = await User.findOne({
            // "firstName" and "lastName" are attributes of the "User" model
            where: {
                id: id,
            },
        });
        res.status(200).json(data)
    }

    
    static async delete(req, res, next) {
        const {id} = req.params
        await User.destroy(
            {where: {
                    id: id
                }
            }
        )

        res.status(200).json(
            {
                message: "successfully delete"
            }
        )
    }
}

module.exports = userController;