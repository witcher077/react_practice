const ideaCommentModel = require('../model/ideaCommentModel');

class IdeaCommentDao {
  async create(data) {
    try {
      const newComment = new ideaCommentModel(data);
      const saveComment = await newComment.save();
      return {
        data: {
          message: 'Comment added successfully',
          result: saveComment
        }
      };
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async update(data, id) {
    try {
      let result = await ideaCommentModel.updateOne({ '_id': id },
        { $set: data });
      if (result.nModified === 1) {
        return { 'data': { message: 'comment updated successfully' } };
      } else if (result.n !== 1) {
        return { error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getDetail(query) {
    try {
      let data = await ideaCommentModel.find(query)
        .select({ '__v': 0 }).lean();
      if (data[0]) {
        return { 'data': data[0] };
      } else {
        return { data: null, error: { message: 'No record found' }, status: 404 };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async list(query) {
    try {
      let data = await ideaCommentModel.find(query)
        .select({ '__v': 0 }).sort({ createdOn: -1 }).lean();
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



module.exports = new IdeaCommentDao();