const rm = require('../../services/require.module.js');
const userDao = require('../DAO/user');
const { v4: uuidV4 } = require('uuid');

const ideaModel= require("../model/ideaModel");
const userModel = require('../model/userModel');
const userHistoryModel = require('../model/userHistory');
const userHistory = require('../model/userHistory');
const ideaRolesModel = require('../model/ideaRolesModel');
const user = require('../DAO/user');
const bcrypt = require('bcrypt')


class userService {
  async register(input) {
    try {
      const schema = {
        'firstName': 'joi.string().required()',
        'lastName': 'joi.string().required()',
        //Old one Allows epsilon and publicis email
        // 'email': 'joi.string().email().required().regex(/@(publicisgroupe\.net|epsilon\.com)$/)',
        //New one allows only publicis email
        'email': 'joi.string().email().required().regex(/@(publicisgroupe\.net)$/)',
        'password': 'joi.string().min(6).required()',
        'userType': `joi.string().valid('admin','user').required()`
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, input);
      if (!schemaValidationResult) {
        let userDetail = [];
        input.email = input.email.toLowerCase();
        if (input.email) {
          const query = { 'email': input.email };
          userDetail = await userDao.details(query);
        }

        if (userDetail?.error?.message === 'No record found') {
          const name = `${input.firstName} ${input.lastName}`;
          const hashedPassword = await bcrypt.hash(input.password, 10)
          const userObject = {
            email: input.email,
            firstName: input.firstName,
            lastName: input.lastName,
            name: name,
            password: hashedPassword,
            userType: input.userType
          };
          const result = await userDao.register(userObject);
          return result;
        } else {
          return { error: { message: 'User already present' }, status: 403 };
        }
      } else {
        return ({
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        });
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async details(input) {
    try {
      const schema = {
        'email': 'joi.string().email().required()'
      }
      const schemaValidationResult = rm.validationUtility.validate(schema, input);
      if (schemaValidationResult) {
        return ({
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        });
      } else {
        const query = { 'email': input.email };
        const result = await userDao.details(query);
        return result;
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async list() {
    try {
      const result = await userDao.list();
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async topLeaderlist(s=1,l=10,mail,sortBy='totalPoints', order=-1) {
    try {
     
      let query = {}
      if (sortBy) {
        query[sortBy] = order
      }
     
      //const result = await userDao.topLeaderlist((s-1)*l,l,query);
      const result= await userModel.find({}).sort(query).select({"__v":0}).lean()
      let total = result.length;
      let myrank;
      if(result.length>0){
        for(let item of result){
          let followers= item["followers"];
          if (followers && followers.includes(mail)){
            item["following"]=true;
          }
          else
          {
            item["following"]=false;
          }
          delete item.followers;
          delete item.userType;
          item["submitteddata"] = await ideaModel.find({"email":new RegExp(`${item["email"]}`,"i") }).countDocuments();
          let nominate = await ideaRolesModel.distinct("ideaId",{"appliedBy.email":new RegExp(`${item["email"]}`,"i") });
          item["nominated"]=nominate.length
          //item["nominated"] = await ideaModel.find({'nominated':{"$in" : [new RegExp(`${item["email"]}`,"i")]}}).countDocuments();
        }
        result.sort((a,b)=> (b[sortBy]-a[sortBy] || b.submitteddata - a.submitteddata || b.nominated - a.nominated));
        
        for(let i=0;i<result.length;i++){
          result[i]["ranking"]=i+1;
          if(result[i]["email"].toLowerCase()==mail.toLowerCase()){
            myrank=i+1;
          }
        }

      }
      console.log(s,l)
      let sub;
      if(!isNaN(s)){
      sub= result.slice((s-1)*l,s*l)
      }
      else{
        sub=result
      }
 
      return {result:sub,total,myrank};
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async user_profile_details(input,user) {
    try {
      const query = { 'email': new RegExp(`${input["email"]}`,"i") };
      const result = await userDao.details(query);
      const follow = await userModel.find({'email':new RegExp(`${input["email"]}`,"i"),'followers':{"$in" : [new RegExp(`${user["email"]}`,"i")]}})
      if(result.data){
        result.data.following=(follow.length)?true:false
      }
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getMyIdeas(input) {
    try {
   
      const result = await userDao.getMyIdeas(input);
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getIdeasCount(input) {
    try {
      const result = await userDao.getIdeasCount(input);
      return result;
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getNominatedIdeas(input) {
    try {
      const result = await userDao.getNominatedIdeas(input);
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async nominatedIdeasCount(input) {
    try {
      const result = await userDao.nominatedIdeasCount(input);
      return result;
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  //allocate points

  async allocatePoints(input, loginUser) {
    try {
      if (loginUser.userType.toLowerCase() === "admin") {
        let result = await userDao.allocatePoints(input)
        return result;
      }
      else {
        return { "error": { message: "Unauthorized user" }, status: 500 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async followUser(data, usermail){
    try{

      let userdata = await userModel.find({email:new RegExp(`${data["email"]}`,"i")});
      if(userdata.length>0){
        let followlist= (userdata[0]["followers"])?userdata[0]["followers"]:[]
        
        if(data["follow"]){
        if(!followlist.includes(usermail)){
          followlist.push(usermail);
          let result = await userModel.updateOne({email:new RegExp(`${data["email"]}`,"i")},{$set:{followers:followlist}});
          if (result.nModified === 1) {
            return { 'data': { message: 'user followed' } };
          } else  {
            return { error: { message: 'No record found' }, status: 404 };
          }

        }
        else{
          return { error: { message: 'user already following' }, status: 404 };
        }
       }
      else{
        let index = followlist.indexOf(usermail);
          if (index !== -1) {
            followlist.splice(index, 1);
            let res = await userModel.updateOne({email:new RegExp(`${data["email"]}`,"i")},{$set:{followers:followlist}});
            if (res.nModified === 1) {
              return { 'data': { message: 'user unfollowed' } };
            } else  {
            return { error: { message: 'No record found' }, status: 404 };
            }
        }
        else
        {
          return { error: { message: 'user not followed yet' }, status: 404 };
        }
      }
      }
      else
      {
        return { error: { message: "user doesn't exist" }, status: 400 };
      }

    }
    catch(error){
      return { error: { message: error.message }, status: 500 };
    }
  }

  async createUserHistory(mail, name, message){
    try{
      let history = {
        email:mail,
        userName:name,
        description:message,
        createdOn:new Date()
      }
      let res = await userHistory.create(history)
      return res;

    }
    catch(error){
      return { error: { message: error.message }, status: 500 };
    }
  }
  async getUserHistory(email,pageNo,pagePerRecord){
    try{
      
      let history = await userHistoryModel.find({email:new RegExp(`${email}`,"i")})
      .sort({createdOn:-1}).skip((pageNo-1)*pagePerRecord).limit(pagePerRecord).select({"_id":0,"__v":0}).lean()
      
      let total = await userHistoryModel.countDocuments({email:new RegExp(`${email}`,"i")});
      return {data:history,totalRecord:total}
    }
    catch(error){
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new userService();
