const ideaModel = require('../model/ideaModel');

class IdeaDashboard {
  async getIdeasCount() {
    try {
      var query1 = { 'status': "inProgress" };
      var query2 = { 'status': "complete" };
      var query3 = { 'status': "submitted" };
      var query4 = { 'status': "openForNomination" };

      let inprogressdata = await ideaModel.find(query1).count().select({ '__v': 0 }).lean();
      let completedata = await ideaModel.find(query2).count().select({ '__v': 0 }).lean();
      let submitteddata = await ideaModel.find(query3).count().select({ '__v': 0 }).lean();
      let openForNominationdata = await ideaModel.find(query4).count().select({ '__v': 0 }).lean();
      let alldata = await ideaModel.find({'status':{$ne:'reject'}}).count().select({ '__v': 0 }).lean();

      if (inprogressdata >= 0||completedata >= 0||submitteddata >= 0 || alldata>=0 ||openForNominationdata>=0) {
        return {data : {submitteddata,inprogressdata,completedata,openForNominationdata,alldata}}
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new IdeaDashboard();
