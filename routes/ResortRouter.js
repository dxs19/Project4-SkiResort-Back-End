const Router = require('express').Router()
const controller = require('../controllers/ResortController')
const middleware = require('../middleware')

Router.get('/', controller.getAllResorts)
Router.get('/:resort_id', controller.getResortById)
module.exports = Router