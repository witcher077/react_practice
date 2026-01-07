const categoryService = require("../services/category.service")

class category {

    records = (async (req, callback) => {
        try {
            let result = await categoryService.records()
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


module.exports = new category();