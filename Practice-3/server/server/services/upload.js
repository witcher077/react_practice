'use strict';
const rm = require('./require.module');
var path = require('path')
class Upload {
  async fileUploadToServer(req) {
    try {

      if (!rm.fs.existsSync(rm.settings.file.destination)) {
        rm.fs.mkdirSync(rm.settings.file.destination);
      }

      const storage = rm.multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, rm.settings.file.destination)
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '~' + file.originalname)
        }
      })

      const fileFilter = (req, file, cb) => {
        var ext = path.extname(file.originalname)
        if (rm.settings.file.type.includes(ext)) {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .pdf, .docx,.ppt and .xlsx format allowed!'));
        }
      };

      let fileUpload = rm.multer({
        storage: storage,
        limits: {
          fileSize: 1024 * 1024 * 2
        },
        fileFilter: fileFilter
      });

      let error = {
        error: {
          message: 'Bad Request - Please select files to upload',
          error: ''
        },
        status: 400
      }

      const upload = rm.nodeUtil.promisify(fileUpload.array('files'));

      await upload(req, null);

      if (req.files.length === 0) {
        return error;
      } else {
        return req.files;
      }
    } catch (error) {
      return error;
    }
  }
}
module.exports = Upload;
