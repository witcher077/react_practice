const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'title': {
    'type': String
  },
  'description': {
    'type': String
  },
  'sender': {
    'type': String
  },
  'receiver': {
    'type': [String]
  },
  'path': {
    'type': String
  },
  'notificationFor': {
    'type': String
  },
  'notificationType': {
    'type': String,
    'default': 'idea'

  },
  'readList': {
    'type': [String],
  },
  'createdOn': {
    'type': 'Date',
    'default': Date.now(),
    'createIndexes': true
  }
});

module.exports = mongoose.model('notification', schema, 'notification');