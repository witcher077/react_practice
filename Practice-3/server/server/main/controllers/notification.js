const notificationService = require("../services/notification.service")

class Notification {

    get = (async (req, callback) => {
        try {
            console.log(req.user)
            let result = await notificationService.getNotifications(req.query.skip, req.query.limit, req.user.email, req.user.userType)
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, { data: result })
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    post = (async (req, callback) => {
        try {
            let result = await notificationService.createNotification(req.body)
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

    read = (async (req, callback) => {
        try {

            let result = await notificationService.readnotification(req.body,req.user.email)
            if (result.error) {
                callback(result, null)
            } else {
                callback(null,  result )
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

}

module.exports = new Notification();