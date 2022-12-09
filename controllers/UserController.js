const { User } = require('../models')
const middleware = require('../middleware')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}



const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.user_id, {
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllUsers,
    getUserById
}