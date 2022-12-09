const Router = require('express').Router()
const controller = require('../controllers/ResortController')
const middleware = require('../middleware')

Router.get('/', controller.getAllResorts)
module.exports = Router