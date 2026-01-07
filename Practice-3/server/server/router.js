const express = require('express');
const router = express.Router();
const routeParser = require('./middlewares/route.parser');
const authorization = require('./middlewares/authorization');

router.post('/api/user', routeParser);
router.post('/api/auth/*', routeParser);
router.all('/api/*', authorization.validate, routeParser);


module.exports = router;
