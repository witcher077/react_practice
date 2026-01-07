const notificationModel = require('../model/notificationModel');

class NotificationDao {

  async getNotifications(offset,limit,query) {
    try {
      let data = await notificationModel.find(query).sort({createdOn:-1}).skip(parseInt(offset)).limit(parseInt(limit))
        .select({ '__v': 0 }).lean();
      if (data.length > 0) {
        return {data} 
      } else {
        return { data: [],message: 'No record found' , status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async createNotifications(data){
    try {
        const notify = new notificationModel(data);
        const createNotify = await notify.save();
        return {
          data: {
            message: 'notification added successfully',
            result: createNotify
          }
        };
      } catch (error) {
        return { error: { message: error.message }, status: 500 };
      }
  }

  async update(data, id) {
    try {
      let result = await notificationModel.updateOne({ '_id': id },
        { $set: data });
      if (result.nModified === 1) {
        return { 'data': { message: 'notification modified successfully' } };
      } else if (result.n !== 1) {
        return { data: { message: 'No record found' }, status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new NotificationDao();