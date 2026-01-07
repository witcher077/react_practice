const categoryModel = require('../model/categoryModel');

class CategoryDao {

  async records() {
    try {
      let data = await categoryModel.find()
        .select({ '__v': 0 }).lean();
      if (data.length > 0) {
        return { 'records': data };
      } else {
        return { 'records':[], message: 'No record found' , status: 204 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new CategoryDao();
