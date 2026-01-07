const ideaHistoryModel = require('../model/ideaHistoryModel');

class HistoryDao {

  async ideaHistory(ideaId, pageNo, pagePerRecord) {
    try {
      let data = await ideaHistoryModel.find({ 'ideaId': ideaId }).sort({"createdOn":-1}).skip((pageNo-1)*pagePerRecord).limit(pagePerRecord)
        .select({ '__v': 0 }).lean();
      if (data.length > 0) {
        return { 'records': data };
      } else {
        return { records: [], error: { message: 'No record found' }, status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new HistoryDao();
