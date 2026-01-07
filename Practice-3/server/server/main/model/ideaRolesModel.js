
const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'ideaId':{
    'type':String
  },
  'name': {
    'type': String
  },
  'skills':{
    'type':[String]
  },
  'open':{
    'type':Boolean,
    'default':true,
  },
  'appliedBy':{
    'type':Object,
    'default':{}
  }
});

module.exports = mongoose.model('idearole', schema, 'idearole');
