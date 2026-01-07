const rm = require('../services/require.module');
const userDao = require('../main/DAO/user')
const Jwt = require("jsonwebtoken")
const secret = (rm.settings.jwt && rm.settings.jwt.secretKey) ? rm.settings.jwt.secretKey : null;

exports.validate = async (req, res, next) => {
  if (typeof req.headers.cookie !== 'undefined') {
    const auth = req.headers.cookie.match(/(; )?auth=([^;]*);?/);
    if (typeof auth !== 'undefined' && auth !== null && auth !== '') {
      req.headers.auth = auth[2];
    }
  }

  const errorMsg = { error: { message: 'Invalid Token Id' }, status: 401 };
  if (typeof req.headers.authorization !== 'undefined') {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (token == null) {
      res.status(401).send("Invalid token");
      return;
    }
    const jwt = new (rm.jwt)(req);
    const result = await jwt.verifyJwt();
    /*Jwt.verify(token,secret, async (err, user) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                res.status(401).send("Token expired error");
                return;
            }
            res.status(401).send("Error in decoding the token");
            return;
        }
        req.user = user
        next();
    })*/
    if (result) {
      let userDetail = await userDao.details({ email: {$regex:result.email,$options:"i"} });
      if (userDetail.error) {
        rm.responseHandler(req, res, errorMsg);
      } else {
        req.user = userDetail.data
        next();
      }
    } else {
      rm.responseHandler(req, res, errorMsg);
    }
  } else {
    rm.responseHandler(req, res, errorMsg);
  }
};
