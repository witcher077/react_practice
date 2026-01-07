const { query } = require('express');
const rm = require('../../services/require.module');
const notificationDao = require('../DAO/notification');
const notificationModel = require('../model/notificationModel')

class notificationService {

  async getNotifications(offset=1, limit=15, email, type) {
    try {

      let query = {}
      //query["notificationFor"] = new RegExp(`${type}`,"i")
      query["receiver"] = { "$in": [new RegExp(`${email}`,"i")] }
      const result = await notificationDao.getNotifications((offset-1)*limit, limit, query);
      if(!result.error){
      for(let item of result.data){
        if(item["readList"].includes(email)){
          item["isRead"]=true;
        }
        else
        {
          item["isRead"]=false;
        }
      }
    }
      return result;

    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }


  async createNotification(input) {
    try {
      const schema = {
        'title': 'joi.string().required()',
        'description': 'joi.string().required()',
        'sender': 'joi.string().email().required()',
        'receiver': 'joi.array().items(joi.string().email().required()).required()',
        'notificationFor': `joi.string().valid('user','admin').required()`,
        'path': 'joi.string()',
        'notificationType': 'joi.string()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, input);
      if (!schemaValidationResult) {
        input["createdOn"] = new Date()
        const result = await notificationDao.createNotifications(input);
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


  async readnotification(input,email) {
    try {
      let notification = await notificationModel.find({ "_id": input["id"] })
      if (notification.length > 0) {
        let list = notification[0]["readList"];
        if(!list.includes(email)){
        list = (list.length)?list.push(email):[email];
        }
        let result = await notificationModel.updateOne({ "_id": input["id"] }, { $set: { "readList":list } });
        if (result.nModified === 1) {
          return { "data": { message: 'notification modified successfully' } }
        } else {
          return { "error": { message: 'No record found' }, status: 404 };
        }
      } else {
        return { error: { message: 'No record found' }, status: 404 };
      }
    }
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new notificationService();