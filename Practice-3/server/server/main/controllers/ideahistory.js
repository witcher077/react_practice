const ideaHistoryService = require("../services/ideahistory.service")

class Ideahistory {

    list = (async (req, callback) => {
        try {
            let { ideaId, pageNo, pagePerRecord } = req.body;
            let result = await ideaHistoryService.ideaHistory(ideaId, pageNo, pagePerRecord, req.user)
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


module.exports = new Ideahistory();