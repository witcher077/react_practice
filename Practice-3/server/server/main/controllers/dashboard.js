const dasboardService = require("../services/dashboard.service");
const ideaService = require("../services/idea.service");
const userService = require("../services/user.service");

class Dashboard {
    get = (async (req, callback) => {
        try {
            let result = await dasboardService.getIdeasCount()
            let topIdeasList = await ideaService.topIdeasList();
            let topLeaderlist = await userService.topLeaderlist(1, 6,req.user.email)

            if (result.error) {
                callback(result, null)
            }
            else if (topIdeasList.error) {
                callback(topIdeasList, null)
            }
            else if (topLeaderlist.error) {
                callback(topLeaderlist, null)
            } else {
                callback(null, {
                    data: { "count": result.data, "topIdeasList": topIdeasList, "topLeaderlist": topLeaderlist.result }
                })
            }
        } catch (error) {
            error.status = 400
            callback(error, null)
        }
    });


    ideaCount = (async(req, callback)=>{
        try{
            let result = await dasboardService.getIdeasCount()
            if (result.error) {
                callback(result, null)
            }
            else {
                callback(null, {
                    data:{"count":result.data}
                })
            }

        }
        catch(error){
            error.status = 400
            callback(error, null)
        }
    })

}


module.exports = new Dashboard();