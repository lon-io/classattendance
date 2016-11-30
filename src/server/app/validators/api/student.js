/**
 * Created by lon on 10/9/16.
 */

var validateStudent = function(req) {
    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('specialization', 'Specialization is required').notEmpty();
    return req.validationErrors(); // check the validation object for errors and return them
};

module.exports = validateStudent;