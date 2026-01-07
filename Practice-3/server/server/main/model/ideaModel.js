const rm = require('../../services/require.module');
const mongoose = rm.mongoose;

const schema = new mongoose.Schema({
  'firstName': {
    'type': String
  },
  'lastName': {
    'type': String
  },
  'email': {
    'type': String
  },
  'category': {
    'type': String
  },
  'location': {
    'type': String
  },
  'title': {
    'type': String
  },
  'description': {
    'type': String
  },
  'possibleSolution': {
    'type': String
  },
  'benefits': {
    'type': String
  },
  'efforts': {
    'type': String
  },
  'skillsRequired': [{
    'type': String
  }],
  'attachment': {
    'type': [Object]
  },
  'views': {
    'type': [String],
    'default': []
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
  'likes': {
    'type': [String]
  },
  'intrested': {
    'type': [String]
  },
  'nominated': {
    'type': [String]
  },
  'comments': {
    'type': [String]
  },
  'complexity': {
    'type': String,
    'enum': ['simple', 'medium', 'complex',''],
    'default': ''
  },
  'action': {
    'type': String,
    'enum': ['approve','reject',''],
    'default': ''
  },
  'team': {
    'type': [String]
  },
  'status': {
    'type': String,
    'enum': ['submitted', 'openForNomination', 'inProgress','complete','reject'],
    'default': 'submitted'
  },
  'codeUploadToRepo': {
    'type': Boolean,
    'default': false
  },
  'demo': {
    'type': Boolean,
    'default': false
  },
  'technicalDocumentation': {
    'type': Boolean,
    'default': false
  },
  'adminComment': {
    'type': String
  },
  'codeUrl': {
    'type': String
  },
  'documentUrl': {
    'type': String
  },
  'approvedDate': {
    'type': 'Date',
    'createIndexes': true
  },
  'notifyUser': {
    'type': [String]
  },
  'tags': {
    'type': [String],
    'default': []
  },
  'roleFilled': {
    'type': Boolean,
    'default': false,
  },
  'formType': {
    'type': String,
  },
  'ProductAlignment': {
    'type': [String],
    'default': []
  },
});

module.exports = mongoose.model('idea', schema, 'idea');
