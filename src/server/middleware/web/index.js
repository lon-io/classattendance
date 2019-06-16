var express = require('express');
var router = express.Router();
var sessionMiddleware = require('./sessionMiddleware');

// var cookieParser = require('cookie-parser');
//
// router.use(cookieParser());
//
// // sessions
// router.use(sessionMiddleware);

module.exports = router;
