var express = require('express');
var router = express.Router();
var errors = require('./errors');
var login = require('./login');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');


// all other routes are handled by Angular
router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../../../dist/index.html'));
});

// /* GET home page. */
// router.get(['/', '/login', '/auction'], function(req, res, next) {
//     res.sendFile(path.join(__dirname, '../../', 'views', 'index.html'));
// });

// // login / logout routes
// router.use(login);

// error handlers
router.use(errors);

module.exports = router;
