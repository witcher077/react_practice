const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'email': {
    'type': String
  },
  'userName': {
    'type': String
  },
  'description':{
    'type':String
  },
  'createdOn': {
    'type': 'Date',
    'default': Date.now(),
    'createIndexes': true
  },
})

module.exports = mongoose.model('userhistory', schema, 'userhistory');
