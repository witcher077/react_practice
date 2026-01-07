const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'firstName': {
    'type': String
  },
  'lastName': {
    'type': String
  },
  'name': {
    'type': String
  },
  'userId': {
    'type': String
  },
  'email': {
    'type': String
  },
  'password': {
    'type': String
  },
  'userType': {
    'type': String
  },
  'totalPoints': {
    'type': Number,
    'default': 0
  },
  "followers":{
    'type':[String]
  },
  'createdOn': {
    'type': 'Date',
    'default': Date.now
  },
});

module.exports = mongoose.model('user', schema, 'user');
