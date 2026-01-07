const ideaService = require("../services/idea.service");
const dasboardService = require("../services/dashboard.service");
const ideaHistoryService = require("../services/ideahistory.service");
const { io } = require('../../utils/socketApi')

class Idea {

    post = (async (req, callback) => {
        try {
            let result = await ideaService.create(req.body, req.user)
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

    put = (async (req, callback) => {
        try {
            let result = await ideaService.update(req.body, req.params[0], req.user)
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
            let result = await ideaService.getDetail(req.params[0], req.user)
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
            let { status, pageNo, pagePerRecord, sortBy, order } = req.body;
            let result = await ideaService.list(status, pageNo, pagePerRecord, sortBy, order, req.user);
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
            let result = await ideaService.likeIdea(req.body, req.user, req.query.id);
            if (result.error) {
                callback(result, null)
            } else {
               let idea = await ideaService.getDetail(req.query.id, req.user) 
               
               io.of("/api/socket").emit(`getLikeData${req.query.id}`, { msg: "Ideas db changed", records: idea });
               callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    interest = (async (req, callback) => {
        try {
            let result = await ideaService.showInterest(req.body, req.query.id, req.user);
            if (result.error) {
               
                callback(result, null)
            } else {
                //let data = await ideaService.getDetail(req.query.id, req.user)
                //io.of("/api/socket").emit(`getData${req.query.id}`, { msg: "Ideas db changed", records: data });
                callback(null, result)
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    count = (async (req, callback) => {
        try {
            let result = await dasboardService.getIdeasCount()
            if (result.error) {
                callback(result, null);
            }
            else {
                callback(null, result);
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    notify = (async (req, callback) => {
        try {
            let result = await ideaService.notify(req.query.ideaId, req.user)
            if (result.error) {
                callback(result, null);
            } else {
                callback(null, result);
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    nominate = (async (req, callback) => {
        try {
            let {roleId,ideaId}=req.body
            let result = await ideaService.nominate(ideaId,roleId, req.user)
            if (result.error) {
                
                callback(result, null);
            } else {
                //let data = await ideaService.getDetail(ideaId, req.user)
                //io.of("/api/socket").emit(`getData${req.query.id}`, { msg: "Ideas db changed", records: data });
                callback(null, result);
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    })

    history = (async (req, callback) => {
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

    skills = (async (req, callback) => {
        try {
            let result = await ideaService.skills()
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

    tags = (async (req, callback) => {
        try {
            let result = await ideaService.tags()
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

    likesList = (async(req,callback)=>{
        try {
            let result = await ideaService.likesList(req.query,req.user)
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

    interestedList = (async(req,callback)=>{
        try {
            let result = await ideaService.interestedList(req.query,req.user)
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


module.exports = new Idea();