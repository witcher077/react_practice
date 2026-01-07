module.exports = (req, res, result) => {
  try {
    if (result.data || result.records) {
      let contentTypeName = result.data && result.data.contentType ? result.data.contentType : null;
      switch (contentTypeName) {
        case 'fileStream':
          const fileName = result.data['fileName'],
            fileStream = result.data['fileData'],
            mimeType = result.data['mimeType'];
          res.setHeader('Content-Description', 'File Transfer');
          res.setHeader('Content-Type', mimeType);
          res.setHeader('Content-Transfer-Encoding', 'binary');
          if (result.data.download) {
            res.setHeader('Content-Disposition', 'attachment; charset=utf-8; filename=' + fileName);
          }
          fileStream.pipe(res);
          delete result.data['file-data']
          break;
        default:
          res.status(200).send(result);
      }
    } else {
      if (!result.status) {
        result.status = 500;
      }
      if (result.stack) {
        console.log('Response Error', result.stack);
      } else {
        console.log('Response Error', result);
      }
      res.status(result.status).send(result);
    }
  } catch (error) {
    console.log('Response Error', error);
    res.status(500).send({ error: error });
  }
};
