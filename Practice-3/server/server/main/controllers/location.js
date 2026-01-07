const locationService = require("../services/location.service")

class Location {

    records = (async (req, callback) => {
        try {
            let result = await locationService.records()
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


module.exports = new Location();