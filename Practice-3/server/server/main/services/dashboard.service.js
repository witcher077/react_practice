const rm = require('../../services/require.module');
const ideaDashboard = require('../DAO/dashboard');


class DashboardService {

  async getIdeasCount() {
    try {
        const result = await ideaDashboard.getIdeasCount();
        return result;
    } 
    catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new DashboardService();
