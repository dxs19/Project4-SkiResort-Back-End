const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get('/', controller.getAllComments)
Router.get('/:user_id/:resort_id', controller.getComment)
Router.put('/:user_id/:resort_id', controller.updateComment)
module.exports = Router