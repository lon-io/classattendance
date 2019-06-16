var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan'); // logger
var router = express.Router();
var apiRoutes = require('../routes/api/index');
var webRoutes = require('../routes/web/index');
var apiMiddleware = require('./api/index');
var webMiddleware = require('./web/index');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(morgan('dev'));

    app.use('/api+', router
        .use(apiMiddleware)
        .use(apiRoutes));

    app.use('/*', router
        .use(webMiddleware)
        .use(webRoutes));

};
