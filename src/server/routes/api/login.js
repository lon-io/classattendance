var express = require('express');
var router = express.Router();
var UserController = require('../../app/controllers').user;

// create new account
router
    .post('/register', function (req, res, next) {
        UserController.register(req ,function (found) {
            console.log(found);
            res.json(found);
        });
    })
    .post('/login', function (req, res, next) {
        UserController.login(req,function (found) {
            console.log(found);
            res.json(found);
        });
    });
module.exports = router;
