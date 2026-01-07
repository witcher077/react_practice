const historyDao = require('../DAO/ideahistory');
const ideaHistoryModel = require('../model/ideaHistoryModel');

class IdeaHistoryService {
  async ideaHistory(ideaId, pageNo, pagePerRecord, user) {
    try {
      if (user.userType.toLowerCase() === 'admin') {
        const result = await historyDao.ideaHistory(ideaId, pageNo, pagePerRecord);
        const total = await ideaHistoryModel.countDocuments({ideaId: ideaId})
        result["totalRecord"]=total;
        return result;
      } else {
        return { error: { message: 'Unauthorize user' }, status: 404 }
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new IdeaHistoryService();
