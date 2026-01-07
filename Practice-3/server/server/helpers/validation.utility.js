const rm = require('../services/require.module');
const joi = rm.joi;

class ValidationUtility {
  evalSchema(schema) {
    const parsedSchema = {};
    Object.keys(schema).forEach((innerKey) => {
      parsedSchema[innerKey] = {};
      const innerData = schema[innerKey];
      if (typeof innerData === 'object') {
        parsedSchema[innerKey] = this.evalSchema(innerData);
      } else {
        parsedSchema[innerKey] = eval(innerData);
      }
    });
    return parsedSchema;
  }

  validate(schema, input) {
    delete input.efforts;
    delete input.skillsRequired;
    schema = this.evalSchema(schema);
    const result = joi.object(schema).validate(input, { abortEarly: false });
    if (result.error == null) {
      return false;
    } else {
      return result;
    }
  }
}

module.exports = new ValidationUtility();
