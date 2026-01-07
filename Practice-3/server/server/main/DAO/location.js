const locationModel = require('../model/locationModel');

class LocationDao {

  async records() {
    try {
      let data = await locationModel.find()
        .select({ '__v': 0 }).lean();
      if (data.length > 0) {
        return { 'records': data };
      } else {
        return { error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new LocationDao();
