/**
 * Created by lon on 10/9/16.
 */
var roles = require('../../helpers/constants').roles;
var validateStudent = require('./student');
var validateLecturer = require('./lecturer');
var util = require('util');

var validateUser = function(req, callback) {

    var valid = true;
    // validate the input
    req.checkBody('email', 'Email does not appear to be valid').isEmail();
    req.checkBody('firstname', 'Firstname is required').notEmpty();
    req.checkBody('lastname', 'Lastname is required').notEmpty();
    req.checkBody('middlename', 'Middlename is required').notEmpty();
    req.checkBody('role', 'Role is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();

    // check the validation object for errors
    var errors = req.validationErrors();

    if (errors) {
        valid = false;
        callback(valid, 'There have been validation errors: ' + util.inspect(errors));
        return;
    }else{
        var role = req.body.role;
        if(role == roles.LECTURER){
            errors = validateStudent(req);
        }else if(role == roles.STUDENT){
            errors = validateLecturer(req);
        }
    }

    if(errors){
        valid = false;
        callback(valid, 'There have been validation errors: ' + util.inspect(errors));
        return;
    }

    callback(valid);
};

module.exports = validateUser;