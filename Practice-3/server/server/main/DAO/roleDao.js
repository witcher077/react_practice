const roleModel = require('../model/ideaRolesModel');

class RoleDao {

  async create(data) {
    try {
      let res = await roleModel.create(data)
      return res
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async getRoles(query){
    try{
        let res = await roleModel.find(query).select({"__v":0}).lean();
       return res
    }
    catch(error){
        return { error: { message: error.message }, status: 500 };
    }
  }

  async updateRole(id,data){
    try{
        let res = await roleModel.updateOne({"_id":id},{$set:data});
        if (res.nModified === 1) {
            return { 'data': { message: 'role updated successfully' },result:res };
          } else {
            return { data: { message: 'No record found' }, status: 204 };
          }
    }
    catch(error){
        return { error: { message: error.message }, status: 500 };
    }
  }

  async deleteRole(id){
    try{
        let res = await roleModel.deleteOne({"_id":id});
       return res
    }
    catch(error){
        return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new RoleDao();