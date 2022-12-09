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

const addResort = async (req, res) => {
    try {
        const post = await Resort.create({ ...req.body })
        res.send(post)
    } catch (error) {
        throw error
    }
}

const deleteResort = async (req, res) => {
    console.log(req.body)
    try {
        let resortId = parseInt(req.params.resort_id)
        await Resort.destroy({ where: { id: resortId } })
        res.send({ message: 'Resort Deleted' })
    } catch (error) {
        throw error
    }
}

const updateResort = async (req, res) => {
    try {
        let resortId = parseInt(req.params.resort_id)
        let updatedResort = await Resort.update(req.body, {
            where: { id: resortId },
            returning: true
        })
        res.send(updatedResort)
    } catch (error) {
        throw error
    }
}
module.exports = {
    getAllResorts,
    getResortById,
    addResort,
    updateResort,
    deleteResort
}