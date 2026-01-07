const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'id': {
    'type': Number
  },
  'name': {
    'type': String
  }
});

module.exports = mongoose.model('location', schema, 'location');
