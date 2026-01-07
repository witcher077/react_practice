const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'name': {
    'type': String
  }
});

module.exports = mongoose.model('skill', schema, 'skill');
