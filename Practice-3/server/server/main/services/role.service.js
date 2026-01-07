const rm = require('../../services/require.module');
const roleDao = require('../DAO/roleDao');
const ideaModel = require('../model/ideaModel');
const ideaDao = require('../model/ideaModel')
const idea = require('../DAO/idea');

const {UnassignRoleTemplate,deleteRoleTemplate,deleteUserRoleTemplate,UnassignRoleSelfTemplate }= require("../../templates/baseTemplate");
const Template = require("../../helpers/templateMapper");
const EmailService = require('../../utils/mailer');
const skillModel = require('../model/skillModel');
const ideaHistoryModel = require('../model/ideaHistoryModel');


class RoleService {
  async create(data,id,loginUser) {
    try {
      let arr = [];
      let history = {
        "userName": loginUser.name,
        "email": loginUser.email,
        "ideaId": id,
        "createdOn": new Date()
      }

      for(let item of data){        
        let getskills = await idea.skills()
        let objs = item.skills.map(x => ({ name: x }));
        const results = objs.filter(({ name: name1 }) => !getskills.records.some(({ name: name2 }) => name1 === name2));
        await skillModel.create(results)

        let res= await roleDao.create({...item,ideaId:id,appliedBy:{}})
        arr.push(res.name)
        if(res.error){
            return res.error
        }
      }

      history["description"] = `Role ${arr} has been added by ${loginUser.name}`
      const ideaHistory = new ideaHistoryModel(history);
      await ideaHistory.save();

      return {
        data:{
            "message":`${data.length} roles created successfully`
        }
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async deleteRole(roleId,user){
    try{

      let history = {
        "userName": user.name,
        "email": user.email,
        "createdOn": new Date()
      }
    
        let roleData= await roleDao.getRoles({"_id":roleId});
        let res= await roleDao.deleteRole(roleId)

        history["description"] = `Role ${roleData[0].name} has been closed by ${user.name}`
        history["ideaId"] = roleData[0]["ideaId"]
        const ideaHistory = new ideaHistoryModel(history);
        await ideaHistory.save();

        let idea= await ideaModel.findOne({"_id":roleData[0]["ideaId"]});
        if(!res.error){
         
          if(roleData[0]['open']==false){
            if(roleData[0].appliedBy.email){
              let templateData = {
                email: roleData[0].appliedBy.email,
                userName:roleData[0].appliedBy.name,
                subject: `Your Nomination on Idea ${idea.title} is closed`
              };
    
              if(!(roleData[0].appliedBy.email==user.email)){
              let subject = await Template.mapTemplate(deleteUserRoleTemplate.subject, templateData);
              let bodyHtml = await Template.mapTemplate(deleteUserRoleTemplate.bodyHtml, templateData);
              EmailService.sendMail(roleData[0].appliedBy.email, null, subject, bodyHtml)
              }
              await ideaModel.updateOne({"_id":roleData[0]["ideaId"]},{$pull:{nominated:roleData[0].appliedBy.email}})
              }
          }
        
        let templateData = {
          email: roleData[0].appliedBy.email,
          userName:user.name,
          roleName:roleData[0]["name"],
          ideaName:idea.title,
          subject: `Role Closed`
        };
        let subject = await Template.mapTemplate(deleteRoleTemplate.subject, templateData);
        let bodyHtml = await Template.mapTemplate(deleteRoleTemplate.bodyHtml, templateData);
        EmailService.sendMail(rm.settings.Admin_DL, null, subject, bodyHtml)
        }

        return {data:res}
    }
    catch(error){
        return { error: { message: error.message }, status: 500 };
    }
  }



  async unAssignRole(role,user){
    try{

        let history = {
         "userName": user.name,
         "email": user.email,
         "ideaId":role["ideaId"],
         "createdOn": new Date()
        }

        let roleData= await roleDao.getRoles({"_id":role["roleId"],"ideaId":role["ideaId"]});
        let res= await roleDao.updateRole(role["roleId"],{appliedBy:{},open:true})
        console.log(res)
        if(res.result){

          let idea= await ideaModel.findOne({"_id":role["ideaId"]});
          let templateData = {
            email: roleData[0].appliedBy.email,
            userName:roleData[0].appliedBy.name,
            subject: `Your Nomination on Idea ${idea.title} is closed`,
            idea_name: idea.title
          };
          let subject;
          let bodyHtml;
          if(!(roleData[0].appliedBy.email==user.email)){
            //await ideaModel.updateOne({"_id":role["ideaId"]},{$pull:{"nominated":roleData[0].appliedBy.email}})
           subject = await Template.mapTemplate(UnassignRoleTemplate.subject, templateData);
           bodyHtml = await Template.mapTemplate(UnassignRoleTemplate.bodyHtml, templateData);
          }
          else
          {
             subject = await Template.mapTemplate(UnassignRoleSelfTemplate.subject, templateData);
             bodyHtml = await Template.mapTemplate(UnassignRoleSelfTemplate.bodyHtml, templateData);
          }
          EmailService.sendMail(roleData[0].appliedBy.email, null, subject, bodyHtml)
          
          await ideaModel.updateOne({"_id":role["ideaId"]},{$set:{"status":"openForNomination",roleFilled:false,updatedOn:new Date()}})
          await ideaModel.updateOne({"_id":role["ideaId"]}, {$pull:{nominated:roleData[0].appliedBy.email}})

          history["description"] = `Role ${roleData[0].name} has been unAssigned by ${user.name}`
          const ideaHistory = new ideaHistoryModel(history);
          await ideaHistory.save();
         
        }
        return res
    }
    catch(error){
        return { error: { message: error.message }, status: 500 };
    }
  }

  async getIdeaRoles(id){
    try{
        let res= await roleDao.getRoles({ideaId:id})
        console.log(res)
        return res
    }
    catch(error){
        return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new RoleService();