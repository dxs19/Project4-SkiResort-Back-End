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
const addComment = async (req, res) => {
    try {
        const comments = await new Comment(req.body)
        await comments.save()
        res.send(comments)
    } catch (error) {
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

        res.send(updatedComment)
    } catch (error) {
        throw error
    }
}
const deleteComment = async (req, res) => {

    try {
        let commentId = parseInt(req.params.comment_id)
        await Comment.destroy({ where: { id: commentId } })
        res.send({ message: 'Comment Deleted' })
    } catch (error) {
        throw error
    }
}


module.exports = {
    getAllComments,
    getComment,
    updateComment,
    addComment,
    deleteComment
}