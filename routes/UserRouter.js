const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.getAllUsers)
Router.get('/:user_id', middleware.stripToken,
    middleware.verifyToken,
    controller.getUserById)
module.exports = Router
