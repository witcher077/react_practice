const userService = require("../services/user.service")
const rm = require("../../services/require.module")

class user {

    post = (async (req, callback) => {
        try {
            let result = await userService.register(req.body)
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

    get = (async (req, callback) => {
        try {
            let result = await userService.details(req.query)
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

    list = (async (req, callback) => {
        try {
            let result = await userService.list()
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

    // getToken = async (req, callback) => {
    //     try {
    //         const jwt = new (rm.jwt)(req);
    //         const token = await jwt.generatejwt({ "username": "name" });
    //         if (token.error) {
    //             callback(token, null)
    //         } else {
    //             callback(null, { data: { token } })
    //         }
    //         //callback(null,result)
    //     } catch (error) {
    //         error.status = 400
    //         callback(error, null)
    //     }
    // }

    leaderBoard = (async (req, callback) => {
        try {
            let result = await userService.topLeaderlist(parseInt(req.query.skip), parseInt(req.query.limit),req.user.email,req.query.sortBy,req.query.order)            
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, { data: result.result,totalRecord:result.total,rank:result.myrank })
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    get = (async (req, callback) => {
        try {
            let result = await userService.user_profile_details(req.query,req.user)
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

    ideas = (async (req, callback) => {
        try {
            let count = await userService.getIdeasCount(req.body)
            let result = await userService.getMyIdeas(req.body)

            if (count.error) {
                callback(count, null)
            }
            else if (result.error) {
                callback(result, null)
            }
            else {
                callback(null, {
                    data: { "count": count.data, "userIdeaList": result }
                })
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    nominateideas = (async (req, callback) => {
        try {
            let count = await userService.nominatedIdeasCount(req.body)
            let result = await userService.getNominatedIdeas(req.body)

            if (count.error) {
                callback(count, null)
            } else if (result.error) {
                callback(result, null)
            } else {
                callback(null, {
                    data: { "count": count.data, "nominatedIdeaList": result }
                })
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    //allocate points
    point = (async (req, callback) => {
        try {
            let result = await userService.allocatePoints(req.body, req.user)
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

    follow = (async(req, callback)=>{
        try{
            let result = await userService.followUser(req.body,req.user.email)
            if (result.error) {
                callback(result, null)
            } else {
                callback(null, result)
            }

        }
        catch(error){
            error.status = 400
            callback(error, null)
        }
    })

    history = (async (req, callback) => {
        try {
            let {email,pageNo, pagePerRecord}=req.body;
            let result = await userService.getUserHistory(email,pageNo,pagePerRecord)
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




module.exports = new user();