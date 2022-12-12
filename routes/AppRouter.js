const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ResortRouter = require('./ResortRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/resorts', ResortRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
