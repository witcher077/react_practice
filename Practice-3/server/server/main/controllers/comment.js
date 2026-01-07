const ideaService = require("../services/idea.service");
const ideaCommentsService = require("../services/ideaComments.service");
const { io } = require('../../utils/socketApi')

class Comment {

    post = (async (req, callback) => {
        try {
            let result = await ideaCommentsService.createComment(req.body, req.query.ideaId, req.user);
            let data = await ideaService.getDetail(req.query.ideaId, req.user)

            if (result.error) {
                callback(result, null)
            } else {
                io.of("/api/socket").emit(`getData${req.query.ideaId}`, { msg: "Ideas db changed", records: data });
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    list = (async (req, callback) => {
        try {
            let result = await ideaCommentsService.list(req.query.ideaId, req.user);
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    like = (async (req, callback) => {
        try {
            let result = await ideaCommentsService.like(req.query.commentId, req.user, req.body);
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

}

module.exports = new Comment();