const searchService = require("../services/search.service")
const rm = require("../../services/require.module")

class Search {
    post = (async (req, callback) => {
        try {
            let result = await searchService.serachitems(req.body)
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

module.exports = new Search()