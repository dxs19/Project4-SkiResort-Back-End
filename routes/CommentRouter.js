const Router = require('express').Router()
const { application } = require('express')
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get('/', controller.getAllComments)
Router.get('/:user_id/:resort_id', controller.getComment)
Router.put('/:user_id/:resort_id', controller.updateComment)
Router.post('/addComment', controller.addComment)
Router.delete('/:comment_id', controller.deleteComment)
Router.get('/:comment_id', controller.getCommentById)
Router.put('/:comment_id', controller.updateCommentById)
module.exports = Router