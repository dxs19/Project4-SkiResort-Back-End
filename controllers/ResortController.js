const { Resort } = require('../models')

const getAllResorts = async (req, res) => {
    try {
        const resorts = await Resort.findAll()
        res.send(resorts)
    }
    catch (error) {
        throw error
    }
}

const getResortById = async (req, res) => {
    try {
        const resort = await Resort.findByPk(req.params.resort_id, {
        })
        res.send(resort)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllResorts,
    getResortById
}