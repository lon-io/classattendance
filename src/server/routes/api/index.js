var express = require('express');
var router = express.Router();

var StudentController = require('../../app/controllers').student;
var UserController = require('../../app/controllers').user;

var login = require('./login'),
    courses = require('./courses'),
    users = require('./users'),
    lectures = require('./lecture');

router.post('/student/rfid_uid', function(req, res, next){
        StudentController.update_rfid_uid(req,function (found){
            console.log(found);
            res.json(found);
        });
    })
    .get('/reset_uid', function (req, res, next) {
        UserController.getUID(req, function (resp) {
            console.log(resp);
            res.json(resp);
        })
    })
    .use(login)// login / logout routes
    .use(courses)
    .use(users)
    .use(lectures);

module.exports = router;
