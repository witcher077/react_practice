const rm = require('../../services/require.module');
const ideaDao = require('../DAO/idea');
const ideaModel = require("../model/ideaModel")
const skillModel = require("../model/skillModel")
const ideaCommentsService = require("../services/ideaComments.service");
const userDao = require('../DAO/user');
const notificationService = require('./notification.service');
const userModel = require('../model/userModel');
const ideaHistoryModel = require('../model/ideaHistoryModel');
const userService = require('./user.service')
const tagModel = require("../model/tagModel")
const roleDao= require('../DAO/roleDao')

const moment = require('moment')

const Template = require("../../helpers/templateMapper");
const { baseTemplate, approveTemplate, rejectTemplate, completeTemplate } = require("../../templates/baseTemplate");
const EmailService = require('../../utils/mailer');
const setting = require('../../configs/setting.json');
const roleService = require('./role.service');
const ideaRolesModel = require('../model/ideaRolesModel');

class IdeaService {
  async create(input, user) {
    try {
      const schema = {
        'firstName': 'joi.string().required()',
        'lastName': 'joi.string().required()',
        'email': 'joi.string().email().required()',
        'category': 'joi.string().required()',
        'location': 'joi.string()',
        'title': 'joi.string().required()',
        'description': 'joi.string().required()',
        'possibleSolution': 'joi.string().required()',
        'benefits': 'joi.string().required()',
        // 'efforts': 'joi.string().required()',
        // 'skillsRequired': 'joi.array().items(joi.string().required()).min(1).required()',
        'attachment': 'joi.array().items()',
        'tags':'joi.array().items()',
        'ProductAlignment': 'joi.array().items()',
        'formType': 'joi.string()'
      };

      if(!(input.email.toLowerCase()==user.email.toLowerCase())){
        return {
          error: {
            message: 'Request Validation Error',
            error: "email mismatch"
          },
          status: 400
        };
      }
      input.email = user.email.toLowerCase();

      
      const schemaValidationResult = rm.validationUtility.validate(schema, input);

      if (!schemaValidationResult) {
        const result = await ideaDao.create(input);

        if(input.skillsRequired) {
          let getskills = await ideaDao.skills()
          let objs = input.skillsRequired?.map(x => ({ name: x }));
          const results = objs?.filter(({ name: name1 }) => !getskills.records.some(({ name: name2 }) => name1 === name2));
          await skillModel.create(results)
        }

        let gettags = await ideaDao.tags()
        let tagsobjs = input.tags.map(x => ({ name: x }));
        const tagresults = tagsobjs.filter(({ name: name1 }) => !gettags.records.some(({ name: name2 }) => name1 === name2));
        await tagModel.create(tagresults)

        

        if (result.data && result.data.result["_id"]) {
          let ideator = await userModel.find({ "email": new RegExp(`${result.data.result["email"]}`,"i") })
          let admins = await userModel.find({ userType: new RegExp('admin', "i") });
          admins = admins.map((x) => {
            return x["email"]
          })


          let followers = ideator[0].followers;
          let follower= [];

          for(let i=0;i<followers.length;i++){
            let users = await userModel.find({ "email": new RegExp(`${followers[i]}`,"i") })
            if(users[0].userType =='user'){
             follower.push(users[0].email)
            }
          }
           
          let notifyUser = {
            "title": "submitted new idea",
            "description": `Your work mate ${result.data.result.firstName} has submitted an idea. Want to know more? `,
            'sender': ideator[0]["email"],
            'receiver': follower,
            'notificationFor': 'user',
            'notificationType': 'idea',
            'path': `${result.data.result["_id"]}`

          }

          let notifyadmin = {
            "title": "submitted new idea",
            "description": `${ideator[0].name} submitted new idea `,
            'sender': ideator[0]["email"],
            'receiver': admins,
            'notificationFor': 'admin',
            'notificationType': 'idea',
            'path': `${result.data.result["_id"]}`

          }
          await notificationService.createNotification(notifyadmin)
          await notificationService.createNotification(notifyUser)

          const history = {
            "userName":`${user.name}`,
            "email": user.email,
            "description": `${input.title} has been submitted  by ${user.name}`,
            "ideaId":`${result.data.result["_id"]}`,
            "createdOn": new Date()
          }
      
          const ideaHistory = new ideaHistoryModel(history);
          await ideaHistory.save();

          let templateData = {
            email: result.data.result.email,
            firstName: result.data.result.firstName,
            message: result.data.result.message,
            subject: `New idea submitted`,
            body: `Idea ${result.data.result.title} has been submitted `
          };

          let subject = await Template.mapTemplate(baseTemplate.subject, templateData);
          let bodyHtml = await Template.mapTemplate(baseTemplate.bodyHtml, templateData);
          EmailService.sendMail(result.data.result.email, setting.Admin_DL, subject, bodyHtml)

         
          let description=`submitted idea ${input.title}`;
          await userService.createUserHistory(user.email,user.name,description);
        }
        return result;

      } else {
        return {
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async update(input, id, loginUser) {

    try {
      let userEdit = true;
      let schema = {
        'firstName': 'joi.string()',
        'lastName': 'joi.string()',
        'email': 'joi.string().email()',
        'category': 'joi.string()',
        'location': 'joi.string()',
        'title': 'joi.string()',
        'description': 'joi.string()',
        'possibleSolution': 'joi.string()',
        'benefits': 'joi.string()',
        // 'efforts': 'joi.string()',
        // 'skillsRequired': 'joi.array().items(joi.string()).min(1)',
        'attachment': 'joi.array().items()',
        'id': 'joi.string().required()',
        'tags':'joi.array().items()',
        'ProductAlignment': 'joi.array().items()',
        'formType': 'joi.string()'
      };

      let approveSchema = {
        'complexity': `joi.string().valid('simple', 'medium', 'complex','')`,
        'action': `joi.string().valid('approve', 'onHold', 'reject')`,
        'roles': 'joi.array()'
      }
      let status = {
        approve: 'openForNomination',
        reject: 'reject'
      }

      let closeSchema = {
        'status': `joi.string().valid('submitted', 'openForNomination', 'inProgress', 'complete', 'reject')`,
        'codeUploadToRepo': 'joi.boolean()',
        'demo': 'joi.boolean()',
        'technicalDocumentation': 'joi.boolean()',
        'codeUrl':'joi.string()',
        'documentUrl':'joi.string()',
      }

      let adminEdit = {
        'team': 'joi.array().items(joi.string().required()).min(1)'
      }

      let adminCommentSchema = {
        adminComment: 'joi.string()'
      }

      if (loginUser.userType.toLowerCase() === 'admin') {
        userEdit = false
        schema = { ...schema, ...approveSchema, ...closeSchema, ...adminEdit, ...adminCommentSchema }
      }
      const schemaValidationResult = rm.validationUtility.validate(schema, { ...input, id: id });

      if (!schemaValidationResult) {
        if (input.action) {
          input.status = status[input.action];
        }
        let prevData = await ideaDao.getDetail({ '_id': id })
        prevData=prevData.data;
        console.log("previous status "+ prevData.status)
        console.log("input status "+ input.status)
        const result = await ideaDao.update(input, id);
        
        if(input.skillsRequired){
        let getskills = await ideaDao.skills()
        let objs = input.skillsRequired?.map(x => ({ name: x }));
        const results = objs?.filter(({ name: name1 }) => !getskills.records.some(({ name: name2 }) => name1 === name2));
        await skillModel.create(results)
        }

        if(input.tags){
        let gettags = await ideaDao.tags()
        let tagsobjs = input.tags.map(x => ({ name: x }));
        const tagresults = tagsobjs.filter(({ name: name1 }) => !gettags.records.some(({ name: name2 }) => name1 === name2));
        await tagModel.create(tagresults)
        }


        if (result.data.result.nModified === 1){
          if(input.roles){
            console.log(input.roles)
            await roleService.create(input.roles,id,loginUser)
          }
          let ideaDetail = await ideaDao.getDetail({ '_id': id })
          ideaDetail = ideaDetail.data;

          let history = {
            "userName": loginUser.name,
            "email": loginUser.email,
            "ideaId": id,
            "createdOn": new Date()
           
          }
      
       
          history["description"] = `${loginUser.name}  edited the idea ${ideaDetail.title}`
          let message = `Edited the idea ${ideaDetail.title}`;
          if (input.status) {
          if(!(prevData.status.toLowerCase()==input.status.toLowerCase())){

          message = `changed status of idea ${ideaDetail.title} to ${input.status} `;
          let notificationDetail = {
            openForNomination: {
              title: 'Idea open for nomination',
              description: `Idea ${ideaDetail.title} has been approve and its open for nomination`
            }, inProgress: {
              title: 'Idea in-progress',
            }, 
            complete: {
              title: 'Idea completion',
            }, reject: {
              title: 'Idea rejection',
            }
          }
          let receiver = ideaDetail.notifyUser ? ideaDetail.notifyUser : []
          let user = await userModel.find({ "email": ideaDetail.email });
          let followers = (user.length) ? (user[0]["followers"]) ? user[0]["followers"] : [] : [];

          followers = [ ...receiver, ...followers];
          let notify = {
            'title': notificationDetail[input.status].title,
            'description': `Your ${ideaDetail.title} idea's status has been changed to ${input.status}. Click here to know more!`,
            'sender': loginUser.email,
            'receiver': [ideaDetail.email],
            'notificationFor': 'user',
            'notificationType': 'idea',
            'path': id
          }
          await notificationService.createNotification(notify);


          console.log("------------followers",followers)
          let notify1 = {
            'title': notificationDetail[input.status].title,
            'sender': loginUser.email,
            'description' : `Your work mate ${ideaDetail.firstName}'s idea is now ${input.status}. Time to show your interest!`,
            'receiver' : followers,
            'notificationFor': 'user',
            'notificationType': 'idea',
            'path': id
          }
          await notificationService.createNotification(notify1);

          
          if (input.status == "openForNomination") {
            notify.description = `The idea that you had shown interest in, has been opened for nomination. All hands on the deck!`
            notify.receiver = receiver
            await notificationService.createNotification(notify);
          }
        
          let templateData = {
            email: ideaDetail.email,
            firstName: ideaDetail.firstName,
            subject: notificationDetail[input.status].title,
          };

          let subject;
          let bodyHtml;

          if (input.status === "openForNomination") {
            history["description"] = `${ideaDetail.title} has been approved by ${loginUser.name}`
            subject = await Template.mapTemplate(approveTemplate.subject, templateData);
            bodyHtml = await Template.mapTemplate(approveTemplate.bodyHtml, templateData);
            EmailService.sendMail(ideaDetail.email, setting.DX_DL, subject, bodyHtml);
          } else if (input.status === "reject") {
            history["description"] = `${ideaDetail.title} has been rejected by ${loginUser.name}`
            subject = await Template.mapTemplate(rejectTemplate.subject, templateData);
            bodyHtml = await Template.mapTemplate(rejectTemplate.bodyHtml, templateData);
            EmailService.sendMail(ideaDetail.email, null, subject, bodyHtml)
          } else if (input.status === "complete") {
            history["description"] = `${ideaDetail.title} has been marked completed by ${loginUser.name}`
            subject = await Template.mapTemplate(completeTemplate.subject, templateData);
            bodyHtml = await Template.mapTemplate(completeTemplate.bodyHtml, templateData);
            EmailService.sendMail(setting.DX_DL, null, subject, bodyHtml)
          }
          else if(input.status=="inProgress"){
            history["description"] = `${ideaDetail.title} has been- moved to in-progress by ${loginUser.name}`
          }
          else
          {
            history["description"] = `${loginUser.name}  edited the idea ${ideaDetail.title}`
          }
        }
          
        }
    
        const ideaHistory = new ideaHistoryModel(history);
        await ideaHistory.save();
        await userService.createUserHistory(loginUser.email,loginUser.name,message);
        // if (userEdit) {
        //   let admins = await userModel.find({ userType: new RegExp(`admin`, "i") });
        //   admins = admins.map((x) => {
        //     return x["email"]
        //   })
        //   let notifyadmin = {
        //     "title": "updated idea ",
        //     "description": `${loginUser.name} updated  idea ${ideaDetail.title} `,
        //     "sender": loginUser.email,
        //     'receiver': admins,
        //     'notificationFor': 'admin',
        //     'notificationType': 'idea',
        //     'path': `${id}`

        //   }
        //   await notificationService.createNotification(notifyadmin)
        // }
      }

        return result;
      } else {
        return {
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getDetail(input, user) {
    try {
      const schema = {
        'id': 'joi.string().required()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, { id: input });
      let setData = { $addToSet: { views: user.email.toLowerCase() } }
      await ideaModel.updateOne(
        { '_id': input },
        setData
      );

      if (!schemaValidationResult) {
        const query = { '_id': input };
        const result = await ideaDao.getDetail(query);

        if (result.data) {
          const comment = await ideaCommentsService.list(input, user);
          result.data.comments = comment.records ? comment.records : [];

          let nominated = await ideaRolesModel.countDocuments({"ideaId":input,open:false})
          let isNominated = await ideaRolesModel.countDocuments({"ideaId":input,"appliedBy.email":new RegExp(`${user["email"]}`,"i")})
          result.data.nominated=nominated
          result.data.isNominated = (isNominated>0)? true : false;
          result.data.isNotify = result.data.notifyUser ? result.data.notifyUser.includes(user.email) : false;
          result.data.isLiked = result.data.likes ? result.data.likes.includes(user.email) : false;
          result.data.isIntrested = result.data.intrested ? result.data.intrested.includes(user.email) : false;
          result.data.likeCount = result.data.likes ? result.data.likes.length : 0;
          result.data.intrestCount = result.data.intrested ? result.data.intrested.length : 0;
          result.data.viewCount = result.data.views ? result.data.views.length : 0;
          
        
          let state= result.data.status;
          result.data.status=state;
          state= state.toLowerCase();
          if(state=='submitted'){
            state='Submitted';
          } else if(state=="openfornomination"){
            state="Open For Nomination"
          }else if(state=="inprogress"){
            state="In Progress"
          }
          else if(state=="complete"){
            state="Completed"
          }
          else{
            state = state.charAt(0).toUpperCase() + state.slice(1)+"ed";
          }
          result.data.statevalue=state
          


          if (user.userType.toLowerCase() != 'admin') {
            delete result.data.complexity;
            delete result.data.action;
            delete result.data.demo;
            delete result.data.technicalDocumentation;
            delete result.data.notifyUser;

            delete result.data.intrested;
          }
          const roles = await roleService.getIdeaRoles(input)
          console.log(roles);

          result.roles= roles;
          let teams=[];
          for(let item of roles){
            console.log(item)
            if(item["open"]==false){
              teams.push(item["appliedBy"])
            }
          }
          result.data.team=teams;
          // if (user.userType.toLowerCase() != 'admin' && result.data.email != user.email) {
          //   delete result.data.adminComment;
          // }

        }
        return result;
      } else {
        return {
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async list(status = 'all', pageNo = 1, pagePerRecord = 20, sortBy = "updatedOn", order = -1, user) {
    try {
      const result = await ideaDao.list(status, pageNo, pagePerRecord, sortBy, order);
    

      if (result.records) {
        result.records.forEach(ele => {
          if (ele.nominated && ele.nominated.includes(user.email)) {
            ele.isNominated = true;
          } else {
            ele.isNominated = false;
          }

          if (ele.notifyUser && ele.notifyUser.includes(user.email)) {
            ele.isNotify = true;
          } else {
            ele.isNotify = false;
          }

          ele.roleFilled= (ele.roleFilled)?true:false;
          delete ele.nominated;
          delete ele.complexity;
          delete ele.action;
          delete ele.team;
          delete ele.codeUploadToRepo;
          delete ele.demo;
          delete ele.technicalDocumentation;
          delete ele.adminComment;
          delete ele.notifyUser;
        })
      }
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async topIdeasList() {
    try {
      const result = await ideaDao.topIdeasList();
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async likeIdea(data, user, id) {
    try {

      let isLiked = data["like"];
      let ideaLikes;

      let ideas = await ideaModel.find({ "_id": id }).select({ '__v': 0 }).lean();
      let ideadoc = await ideaModel.find({ "_id": id, 'likes': { "$in": [user["email"]] } })
        .select({ '__v': 0 }).lean();
      let likes = ideas[0]['likes'];
      ideaLikes = (likes && likes.length >= 0) ? likes : []
      if (isLiked) {
        if (ideadoc.length === 0) {
          ideaLikes.push(user["email"]);
          let result = await ideaModel.updateOne({ '_id': id }, { $set: { "likes": ideaLikes,updatedOn: new Date() } });
          if (result.nModified === 1) {
            let notifyparentmsgr = {
              "title": "like on your idea",
              "description": `${user.name} likes your idea ${ideas[0]["title"]} `,
              'sender': user["email"],
              'receiver': [ideas[0].email],
              'notificationFor': 'user',
              'notificationType': 'idea',
              'path': id
            }
            let message= `liked on idea ${ideas[0]["title"]}`
            await userService.createUserHistory(user.email,user.name,message)

            if (!(user["email"].toLowerCase() === ideas[0].email.toLowerCase())) {
              await notificationService.createNotification(notifyparentmsgr)
            }
            return { 'data': { message: 'Idea liked successfully' } };
          } else if (result.n !== 1) {
            return { error: { message: 'No record found' }, status: 204 };
          }
        } else {
          return { data: { message: 'user has already liked the idea' } };
        }
      } else {
        if (ideadoc.length > 0) {
          let index = ideaLikes.indexOf(user["email"]);
          if (index !== -1) {
            ideaLikes.splice(index, 1);
            let result = await ideaModel.updateOne({ '_id': id }, { $set: { "likes": ideaLikes ,updatedOn:new Date()} });

            if (result.nModified === 1) {
              return { 'data': { message: 'Idea unliked successfully' } };
            } else if (result.n !== 1) {
              return { error: { message: 'No record found' }, status: 204 };
            }
          }
        } else {
          return { data: { message: 'user not liked the idea yet' }, status: 200 };
        }
      }
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async showInterest(data, id, user) {
    try {
      let interested = data["interested"];
      let interestedIdea;

      let ideas = await ideaModel.find({ "_id": id }).select({ '__v': 0 }).lean();

      let interestedDoc = await ideaModel.find({ "_id": id, 'intrested': { "$in": [user.email] } })
        .select({ '__v': 0 }).lean();

      let interests = ideas[0]['intrested'];
      interestedIdea = (interests && interests.length >= 0) ? interests : []
      if (interested) {
        if (interestedDoc.length == 0) {
          interestedIdea.push(user.email);
          let result = await ideaModel.updateOne({ '_id': id }, { $set: { "intrested": interestedIdea,updatedOn:new Date() } });
          if (result.nModified === 1) {
            let message = `shown interest on idea ${ideas[0]["title"]} `
            await userService.createUserHistory(user.email,user.name,message)
            return { 'data': { message: 'Idea has been added in your intreset' } };
          } else if (result.n !== 1) {
            return { error: { message: 'No record found' }, status: 204 };
          }
        } else {
          return { data: { message: 'User has already shown interests' } };
        }
      } else {
        if (interestedDoc.length > 0) {
          let index = interestedIdea.indexOf(user.email);
          if (index !== -1) {
            interestedIdea.splice(index, 1);
            let result = await ideaModel.updateOne({ '_id': id }, { $set: { "intrested": interestedIdea,updatedOn:new Date() } });

            if (result.nModified === 1) {
              return { 'data': { message: 'Idea has been removed from your interest' } };
            } else if (result.n !== 1) {
              return { error: { message: 'No record found' }, status: 204 };
            }
          }
        } else {
          return { data: { message: 'user not shown interest yet' } };
        }

      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async notify(id, user) {
    try {
      const result = await ideaDao.notify(id, user);
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async nominate(id,roleId, user) {
    try {
      
      let history = {
        "userName": user.name,
        "email": user.email,
        "ideaId":id,
        "createdOn": new Date()
       }

      let appliedUser= {
        name:user.name,
        email:user.email
        }
      let role = await roleDao.getRoles({_id:roleId,ideaId:id,open:true});
      console.log(role)
      if(role.length>0){
      let result = await roleDao.updateRole(roleId,{appliedBy:appliedUser,open:false})
      if (result.data) {
        let ideas = await ideaDao.getDetail({ "_id": id })
        let notifyparentmsgr = {
          "title": "nominate on your idea",
          "description": `${user.name} has nominate on your ${ideas.data["title"]} `,
          'sender': user["email"],
          'receiver': [ideas.data.email],
          'notificationFor': 'user',
          'notificationType': 'idea',
          'path': id

        }

        let openstate=false
        let closedroles = await roleDao.getRoles({"ideaId":id,open:false})
        let allroles = await roleDao.getRoles({"ideaId":id})
        console.log("closedroles",closedroles)
        console.log("allroles",allroles)
        if(closedroles.length==allroles.length && allroles.length>0){
          openstate=true;
          console.log("openstate",openstate)
        }
        await ideaModel.updateOne({"_id":id},{$set:{"roleFilled":openstate, updatedOn:new Date()},  $addToSet: { nominated: user.email } })
       
        let message =` nominated on idea ${ideas.data["title"]} `
        await userService.createUserHistory(user.email,user.name,message)
        await notificationService.createNotification(notifyparentmsgr)

        history["description"] = `Role ${role[0].name} has been nominated by ${user.name}`
        const ideaHistory = new ideaHistoryModel(history);
        await ideaHistory.save();
      }
      return result;
    }
    else
    {
      return {
        error:{
          message:"role already being Nominated"
        },
        status:304
      }
    }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async skills() {
    try {
      const result = await ideaDao.skills();
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async tags() {
    try {
      const result = await ideaDao.tags();
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }


  async likesList(input,user) {
    try {
      const query = { '_id': input.id };
      const result = await ideaDao.likesList(query,user);
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async interestedList(input,user) {
    try {
      const query = { '_id': input.id };
      const result = await ideaDao.interestedList(query,user);
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new IdeaService();
