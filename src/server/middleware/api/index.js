var express = require('express');
var router = express.Router();
var connect = require('connect');
var expressValidator = require('express-validator');

// Configuration
router.use(connect.logger('dev'));
router.use(connect.multipart());
// router.use(connect.json());
// router.use(connect.urlencoded());
router.use(expressValidator());

module.exports = router;
