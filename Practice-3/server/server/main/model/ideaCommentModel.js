const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'ideaId': {
    'type': String,
  },
  'comment': {
    'type': String,
  },
  'likes': {
    'type': [String],
    'default': []
  },
  'email': {
    "type": String
  },
  'userName': {
    "type": String
  },
  'replies': {
    'type': [Object]
  },
  'createdOn': {
    'type': 'Date',
    'default': Date.now(),
    'createIndexes': true
  },
  'updatedOn': {
    'type': 'Date',
    'default': Date.now(),
    'createIndexes': true
  },
});

module.exports = mongoose.model('ideacomments', schema, 'ideacomments');
