const { Resort, User, Comment } = require('../models')

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll()
        res.send(comments)
    }
    catch (error) {
        throw error
    }
}
const updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.update(
            { ...req.body },
            {
                where: {
                    userId: req.params.user_id,
                    resortId: req.params.resort_id
                },
                returning: true
            }
        )
        // add update GPA call here

        res.send(updatedComment)
    } catch (error) {
        throw error
    }
}

const getComment = async (req, res) => {
    try {
        const comment = await Comment.findOne({
            where: {
                userId: req.params.user_id,
                resortId: req.params.resort_id
            }
        })
        res.send(comment)
    } catch (error) {
        throw error
    }
}


module.exports = {
    getAllComments,
    getComment,
    updateComment
}