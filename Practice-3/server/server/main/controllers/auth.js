const authService = require("../services/auth.service")

class Auth {

    login = (async (req, callback) => {
        try {
            let result = await authService.login(req.body)
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

    forgotPassword = (async (req, callback) => {
        try {
            let result = await authService.forgotPassword(req.body)
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


module.exports = new Auth();