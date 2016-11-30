var mongoose = require('mongoose');
var user = require('./user');
var constants = require('../helpers/constants');

var LecturerSchema = new user.BaseSchema({
    title: { type : String }
    ,specialization: { type: String }
});

var Lecturer = user.UserModel.discriminator(constants.roles.LECTURER, LecturerSchema); // our derived model (see discriminator)
module.exports = Lecturer;
