const rm = require('../../services/require.module');
const userDao = require('../DAO/user');
const userModel = require('../model/userModel');
const { v4: uuidV4 } = require('uuid');
const bcrypt = require('bcrypt')

class AuthService {
  async login(payload) {
    try {
      const schema = {
        'email': 'joi.string().email().required()',
        'password': 'joi.string().min(6).required()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, payload);

      if (!schemaValidationResult) {
        const escapedEmail = payload["email"].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        let query = { email: { $regex: escapedEmail, $options: "i" } };
        const userDetail = await userModel.find(query);
        if (userDetail.length > 0) {
          const isPasswordValid = await bcrypt.compare(payload.password, userDetail[0].password);
          if (isPasswordValid) {
            const jwt = new rm.jwt;
            const token = await jwt.generatejwt(payload);
            return {
              data: {
                token: token,
                type: userDetail[0].userType === 'admin' ? 'admin' : 'user',
                name: userDetail[0].name,
                email: userDetail[0].email,
                firstName: userDetail[0].firstName,
                lastName: userDetail[0].lastName
              }
            };
          } else {
            // Invalid password
            return { error: { message: 'Invalid email or password' }, status: 401 };
          }
        } else {
          return userDetail;
        }
      } else {
        return {
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async forgotPassword(payload) {
    try {
      const schema = {
        'email': 'joi.string().email().required()',
        'password': 'joi.string().min(6).required()'
      };
      const schemaValidationResult = rm.validationUtility.validate(schema, payload);
      if (!schemaValidationResult) {
        let query= {email:{$regex:payload["email"],$options:"i"}}
        const user = await userModel.find(query);
        const email = payload.email
        const newPassword = payload.password 
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        if (user.length > 0) {
          // Update the user's password with the new password
          await userModel.update({email : email}, {password : hashedPassword});
          return { message: 'Password updated successfully' };
        } else {
          return { error: { message: 'User not found' }, status: 404 };
        }
      } else {
        return {
          error: {
            message: 'Request Validation Error',
            error: schemaValidationResult.error.details
          },
          status: 400
        };
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }
}

module.exports = new AuthService();
