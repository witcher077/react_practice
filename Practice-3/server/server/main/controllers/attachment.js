const attachmentService = require("../services/attachment.service")

class Attachment {

    post = (async (req, callback) => {
        try {
            let result = await attachmentService.upload(req);
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    });

    get = (async (req, callback) => {
        try {
            let result = await attachmentService.download(req.params[0], req.query.download);
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    });

    delete = (async (req, callback) => {
        try {
            let result = await attachmentService.delete(req.params[0]);
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    });
}


module.exports = new Attachment();