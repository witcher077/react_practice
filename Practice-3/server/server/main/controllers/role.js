const roleService = require("../services/role.service")

class role {

    create = (async (req, callback) => {
        try {
            let result = await roleService.create(req.body,req.query.ideaId,req.user)
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

    unassign = (async (req, callback) => {
        try {
            let result = await roleService.unAssignRole(req.body,req.user)
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

    deleteRole = (async (req, callback) => {
        try {
            let result = await roleService.deleteRole(req.query.roleId,req.user)
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


module.exports = new role();