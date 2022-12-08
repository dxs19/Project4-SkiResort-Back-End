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

module.exports = {
    getAllResorts
}