const rm = require('../../services/require.module');
const categoryDao = require('../DAO/category');
const { v4: uuidV4 } = require('uuid');


class CategoryService {
  async records() {
    try {
      const result = await categoryDao.records();
      return result;
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

}

module.exports = new CategoryService();
