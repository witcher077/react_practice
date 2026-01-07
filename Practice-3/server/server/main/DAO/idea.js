const ideaModel = require('../model/ideaModel');
const rm = require("../../services/require.module")
const skillModel = require('../model/skillModel');
const tagModel = require('../model/tagModel');

const userModel = require('../model/userModel');
const roleModel = require('../model/ideaRolesModel')




class IdeaDao {
  async create(data) {
    try {
      data['createdOn'] = new Date();
      data['updatedOn'] = new Date();
      const newIdea = new ideaModel(data);
      const savedIdea = await newIdea.save();
      //For adding default reward
      let myquery = { 'email': data?.email }
      let existPoints = await userModel.findOne(myquery);
      let newvalues = { $set: { "totalPoints": parseInt(existPoints?.totalPoints) + 5 } };
      let result = await userModel.updateOne(myquery, newvalues);
      return {
        data: {
          message: 'Idea added successfully',
          result: savedIdea
        }
      };
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async update(data, id) {
    try {
      data['updatedOn'] = new Date()
      let result = await ideaModel.updateOne({ '_id': id }, { $set: data });
      if (result.nModified === 1) {
        //Adding reward when idea gets approved by admin
        if (data?.action === "approve") {
          let idea = await ideaModel.findOne({ "_id": id });
          let myquery = { 'email': idea?.email }
          let existPoints = await userModel.findOne(myquery);
          let newvalues = { $set: { "totalPoints": parseInt(existPoints?.totalPoints) + 50 } };
          let result = await userModel.updateOne(myquery, newvalues);
        }
        return { 'data': { result, message: 'Idea updated successfully' } };
      } else if (result.n !== 1) {
        return { data: { message: 'No record found' }, status: 204 };
      } else {
        return { data: { message: 'No update', result }, status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getDetail(query) {
    try {
      let data = await ideaModel.find(query)
        .select({ '__v': 0 }).lean();
      if (data[0]) {
        return { 'data': data[0] };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async list(status, pageNo, pagePerRecord, sortBy, order) {
    try {
      let data;
      let total;
      let sortquery = {};
      sortquery[sortBy] = order

      let collate = {}
      if (sortBy == "firstName") {
        collate = {
          "locale": "en"
        }
      }
      sortquery[sortBy] = order
      console.log(sortquery)

      if (status === "all") {

        data = await ideaModel.find().sort(sortquery).collation({}).skip((pageNo - 1) * pagePerRecord).limit(pagePerRecord)
          .select({ '__v': 0 }).lean();
        total = await ideaModel.countDocuments({});
      } else {
        data = await ideaModel.find({ "status": status }).sort(sortquery).collation({}).skip((pageNo - 1) * pagePerRecord).limit(pagePerRecord)
          .select({ '__v': 0 }).lean();
        total = await ideaModel.countDocuments({ $or: [{ "status": status }, { "action": status }] });
      }
      if (data.length > 0) {
        return { 'records': data, totalRecord: total };
      } else {
        return { 'records': [], message: 'No record found', status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async topIdeasList() {
    try {
      //Old one top ideas based on created date
      // let data = await ideaModel.find({'status':{$ne:'reject'}}).sort({ createdOn: -1 }).limit(3).select({ '__v': 0 }).lean();
      //New one top ideas based on likes,comments and interests
      let data = await ideaModel.aggregate([
        { $match: { status: { $ne: 'reject' } } },
        { $addFields: { totalLikes: { $size: "$likes" }, totalComments: { $size: "$comments" }, totalInterests: { $size: "$intrested" }, } },
        { $sort: { totalLikes: -1, totalComments: -1, totalInterests: -1 } },
        { $limit: 3 },
      ])
      if (data.length > 0) {
        return data;
      } else if (data.length === 0) {
        return [];
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async notify(id, user) {
    try {
      let data = await ideaModel.updateOne(
        { '_id': id },
        { $addToSet: { notifyUser: user.email } }
      );
      if (data.nModified === 1) {

        return ({
          data: {
            message: 'Idea has been added to your notification list'
          }
        })
      }
      if (data.nModified === 0) {
        return ({
          error: {
            message: 'Idea is already added to your notification list'
          }, status: 400
        })
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async skills() {
    try {
      let data = await skillModel.find()
        .select({ '__v': 0 }).lean();
      if (data.length > 0) {
        return { 'records': data };
      } else {
        return { 'records': [], message: 'No record found', status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async tags() {
    try {
      let data = await tagModel.find()
        .select({ '__v': 0 }).lean();
      if (data.length > 0) {
        return { 'records': data };
      } else {
        return { 'records': [], message: 'No record found', status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }


  async likesList(query, user) {
    try {
      let userdata;
      let likearr = [];

      let data = await ideaModel.find(query).select({ '__v': 0 }).lean();
      if (data[0]) {
        let likeslist = data[0].likes;
        let myquery = { "email": { $in: likeslist } };
        userdata = await userModel.find(myquery).select({ '__v': 0 }).lean();

        for (let i = 0; i < userdata.length; i++) {
          let followers = userdata[i].followers;
          if (followers && followers.includes(user.email)) {
            userdata[i]["following"] = true;
          }
          else {
            userdata[i]["following"] = false;
          }
          likearr.push(userdata[i])
        }
        return { 'data': likearr, 'count': likeslist.length };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async interestedList(query, user) {
    try {
      let userdata;
      let interestarr = [];

      let data = await ideaModel.find(query).select({ '__v': 0 }).lean();
      if (data[0]) {
        let intrestedlist = data[0].intrested;
        let myquery = { "email": { $in: intrestedlist } };
        userdata = await userModel.find(myquery).select({ '__v': 0 }).lean();

        for (let i = 0; i < userdata.length; i++) {

          let followers = userdata[i].followers;
          if (followers && followers.includes(user.email)) {
            userdata[i]["following"] = true;
          }
          else {
            userdata[i]["following"] = false;
          }
          interestarr.push(userdata[i])
        }
        return { 'data': interestarr, 'count': intrestedlist.length };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }


  async createRoles(data) {
    try {
      //  console.log(data)
      let result = await roleModel.create(data)
      return { result }

    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }

  }

  async getIdeaRoles(id) {
    try {

      let res = await roleModel.find({ _id: id })
      return res;
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}



module.exports = new IdeaDao();
