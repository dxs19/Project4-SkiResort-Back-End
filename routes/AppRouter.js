const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ResortRouter = require('./ResortRouter')


Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/resorts', ResortRouter)

module.exports = Router
