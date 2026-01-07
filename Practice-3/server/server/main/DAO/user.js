const userModel = require('../model/userModel');
const ideaModel = require('../model/ideaModel');
const notificationService = require('./../services/notification.service');
const ideaRolesModel = require('../model/ideaRolesModel')


class userDao {
  async register(data) {
    try {
      const newUser = new userModel(data);
      const savedUser = await newUser.save();
      return {
        data: {
          message: 'Account registered successfully',
          result: savedUser
        }
      };
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async details(query) {
    try {
      let data = await userModel.find(query).select({ '__v': 0, 'password': 0, '_id': 0 }).lean();
      if (data[0]) {
        return { 'data': data[0] };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async list() {
    try {
      let data = await userModel.find()
        .select({ '__v': 0, 'password': 0, '_id': 0 }).lean();
      if (data.length > 0) {
        return { 'data': data };
      } else {
        return { 'data':[], message: 'No record found' , status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async topLeaderlist(s, l, sortquery) {
    try {
      let data = await userModel.find().sort(sortquery).skip(s).limit(l)
        .select({ '__v': 0, 'password': 0, '_id': 0 }).lean();
      if (data.length > 0) {
        return data;
      } else if (data.length === 0) {
        return [];
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }


  async getMyIdeas(query) {
    try {
      let data;
      if (query.status === "all") {
        data = await ideaModel.find({ "email": new RegExp(`${query.email}`,"i") }).sort({createdOn:-1}).select({ '__v': 0, 'password': 0 }).lean();
      } else {
        data = await ideaModel.find({ $and: [{ "status": new RegExp(`${query.status}`,"i")}, { "email": new RegExp(`${query.email}`,"i") }] })
        .sort({createdOn:-1}).select({ '__v': 0 }).lean();
      }
      if (data) {
        return { 'data': data };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getIdeasCount(input) {
    try {
      var query1 = "inProgress";
      var query2 = "complete";
      var query3 = "submitted";

      let alldata = await ideaModel.find({ 'email':new RegExp(`${input.email}`,"i" )}).count().select({ '__v': 0 }).lean();
      let inprogressdata = await ideaModel.find({ 'email': new RegExp(`${input.email}`,"i" ), 'status': query1 }).count().select({ '__v': 0 }).lean();
      let completedata = await ideaModel.find({ 'email': new RegExp(`${input.email}`,"i" ), 'status': query2 }).count().select({ '__v': 0 }).lean();
      let submitteddata = await ideaModel.find({ 'email': new RegExp(`${input.email}`,"i" ), 'status': query3 }).count().select({ '__v': 0 }).lean();

      if (alldata >= 0 || inprogressdata >= 0 || completedata >= 0 || submitteddata >= 0) {
        return { data: { alldata, submitteddata, inprogressdata, completedata } }
      } else {
        return { data: null, error: { message: 'No record found' }, status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getNominatedIdeas(query) {
    try {
      let data;

      let nominate = await ideaRolesModel.distinct("ideaId",{"appliedBy.email":new RegExp(`${query["email"]}`,"i") });
      console.log(nominate)
      if (query.status === "all") {
        data = await ideaModel.find({ "_id": { $in: nominate } }).select({ '__v': 0}).lean();
      }
      else {
        data = await ideaModel.find({ $and: [{ "status": new RegExp(`${query.status}`,"i") },{ "_id": { $in: nominate } }] }).select({ '__v': 0 }).lean();
      }
      if (data) {
        return { 'data': data };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async nominatedIdeasCount(input) {
    try {
      var query1 = "inProgress";
      var query2 = "complete";

      let nominate = await ideaRolesModel.distinct("ideaId",{"appliedBy.email":new RegExp(`${input["email"]}`,"i") });
      console.log(nominate)
      let alldata = await ideaModel.find({ "_id": { $in: nominate} }).count().select({ '__v': 0 }).lean();
      let inprogressdata = await ideaModel.find({ $and: [{ "status": query1 }, { "_id": nominate }] }).count().select({ '__v': 0 }).lean();
      let completedata = await ideaModel.find({ $and: [{ "status": query2 }, { "_id": nominate }] }).count().select({ '__v': 0 }).lean();

      if (alldata >= 0 || inprogressdata >= 0 || completedata >= 0) {
        return { data: { alldata, inprogressdata, completedata } }
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async allocatePoints(input) {
    try {
      let allocatepoints;
      for (let i = 0; i < input.length; i++) {
        let myquery = { "email": new RegExp(`${input[i].email}`,"i") };
        let existPoints = await userModel.findOne(myquery);
        let newvalues = { $set: { "totalPoints": parseInt(existPoints.totalPoints) + parseInt(input[i].totalPoints) } };
        allocatepoints = await userModel.updateOne(myquery, newvalues);
        let notification={
          "title":"points allocation ",
          "description":`Yayy, you have been rewarded ${parseInt(input[i].totalPoints)} points.`,
          "sender": input[i].email,
          'receiver':  [input[i].email],
          'notificationFor': 'user',
          'notificationType':'user',
          'path': `${input[i].email}`

        }
        await notificationService.createNotification(notification)

      }
      return {
        data: {
          message: 'Points allowcated successfully',
          result: allocatepoints
        }
      };
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
  
}

module.exports = new userDao();
