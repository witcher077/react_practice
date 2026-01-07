const rm = require('../../services/require.module');
const userModel = require('../model/userModel');
const ideaModel = require('../model/ideaModel')
const ideaRolesModel = require('../model/ideaRolesModel')

class SearchService {

    async serachitems(input) {
        try {
            let users = [];
            let ideas = [];
            if (!input["type"]) {
                users = await userModel.find({ userType: "user", name: { $regex: new RegExp(input["text"], 'i') } }).select({ '__v': 0, 'password': 0, '_id': 0 }).lean();
                ideas = await ideaModel.find({ title: { $regex: new RegExp(input["text"], 'i') } })

            } else if (input["type"] == "user") {
                users = await userModel.find({ userType: "user", name: { $regex: new RegExp(input["text"], 'i') } }).select({ '__v': 0, 'password': 0, '_id': 0 }).lean();
            }
            else {
                ideas = await ideaModel.find({ title: { $regex: new RegExp(input["text"], 'i') } })
            }
            for (let user of users) {
                user.submitteddata = await ideaModel.find({"email":  new RegExp(user["email"], 'i') }).countDocuments().select({ '__v': 0 }).lean();
                let nominate = await ideaRolesModel.distinct("ideaId",{"appliedBy.email":new RegExp(`${user["email"]}`,"i") });
                user["nominated"]=nominate.length
               // user.nominated = await ideaModel.find({ 'nominated': { "$in": [ new RegExp(user["email"], 'i')] } }).countDocuments();
            }
            return { data: { users, ideas } }

        }
        catch (error) {
            return { error: { message: error.message }, status: 500 };
        }
    }
}

module.exports = new SearchService()