var mongoose = require('mongoose');
var user = require('./user');
var constants = require('../helpers/constants');

var StudentSchema = new user.BaseSchema({
    matric_no: { type: String, lowercase: true, trim: true },
    rfid_uid: String,
    level: String
});


var Student = user.UserModel.discriminator(constants.roles.STUDENT, StudentSchema); // our derived model (see discriminator)
module.exports = Student;
