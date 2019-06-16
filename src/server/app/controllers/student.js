/**
 * Created by lon on 10/9/16.
 */
var Student = require('../models/index').student;
var User = require('../models/index').user;
var cleanString = require('../helpers/cleanString');

var update_rfid_uid = function(req,callback) {
    var body = req.body;
    var email = cleanString(body.email);
    var rfid_uid = cleanString(body.rfid_uid);
    User.findOne({email: email}, function (err, student) {
        student.rfid_uid = rfid_uid;
        student.save(function (err) {
            if(err) {
                return next(err);
            }else{
                callback({'response':"Update successful",'res':true,'error':false});
            }
        });
    });
};

module.exports = {'update_rfid_uid': update_rfid_uid};