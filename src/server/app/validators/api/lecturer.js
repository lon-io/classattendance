/**
 * Created by lon on 10/9/16.
 */

var validateLecturer = function(req) {
    req.checkBody('matric_no', 'Matric Number is required').notEmpty();
    req.checkBody('rfid_uid', 'Rfid_uid is required').notEmpty();
    req.checkBody('level', 'Level is required').notEmpty();
    return req.validationErrors(); // check the validation object for errors and return them
};

module.exports = validateLecturer;