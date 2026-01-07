const rm = require('../../services/require.module');

class AttachmentService {
  async upload(req) {
    try {
      const uploadService = new rm.upload;
      const result = await uploadService.fileUploadToServer(req);
      if (!result.error && result.length > 0) {
        let data = [];
        result.forEach(ele => {
          data.push({
            "originalname": ele.originalname,
            "filename": ele.filename,
            "path": ele.path,
          })
        })
        return { data: data }
      } else {
        console.log(result)
        return result;
      }
    } catch (error) {
      return { error: { message: error.message }, status: 500 };
    }
  }

  async download(input, download) {
    try {
      const schema = {
        'fileName': 'joi.string().required()',
        'download': 'joi.boolean()'
      }
      const schemaValidationResult = rm.validationUtility.validate(schema, { fileName: input });
      if (!schemaValidationResult) {
        let fileData = rm.fs.createReadStream(`${rm.settings.file.destination}${input}`)
        let orginalFileName = input.substr(input.indexOf("~") + 1, input.length);
        let mimeType = rm.mime.getType(input);

        return {
          data: {
            "contentType": 'fileStream',
            fileData: fileData,
            fileName: orginalFileName,
            mimeType: mimeType,
            download: download ? download : false
          }
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

  async delete(input, download) {
    try {
      const schema = {
        'fileName': 'joi.string().required()'
      }
      const schemaValidationResult = rm.validationUtility.validate(schema, { fileName: input });
      if (!schemaValidationResult) {
        let orginalFileName = input.substr(input.indexOf("~") + 1, input.length);

        if (rm.fs.existsSync(`${rm.settings.file.destination}${input}`)) {
          rm.fs.unlinkSync(`${rm.settings.file.destination}${input}`);
          return {
            data: {
              "message": `${orginalFileName} has been deleted`,
            }
          }
        } else {
          return {
            error: {
              message: `${orginalFileName} not exist`,
              error: ''
            },
            status: 400
          };
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

module.exports = new AttachmentService();
