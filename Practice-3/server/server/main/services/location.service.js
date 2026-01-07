const rm = require('../../services/require.module');
const locationDao = require('../DAO/location');
const { v4: uuidV4 } = require('uuid');


class LocationService {
  async records() {
    try {
      const result = await locationDao.records();
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new LocationService();
