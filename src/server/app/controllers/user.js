/**
 * Created by lon on 10/9/16.
 */
var crypto = require('crypto');
var hash = require('../helpers/hash');
var cleanString = require('../helpers/cleanString');
var mongoose = require('mongoose');
var User = require('../models/index').user;
var Role = require('../models/index').role;
var Lecturer = require('../models/index').lecturer;
var Student = require('../models/index').student;
var gravatar = require('gravatar');
var roles = require('../helpers/constants').roles;
var validate = require('../helpers/validate');
var paramValidators = require('../validators/api/index');
var generate_uid = require('../helpers/generate_uid');

var login = function(req,callback) {
    var body = req.body;
    var email = cleanString(body.email);
    var password = cleanString(body.password);
    User.find({email: email},function(err,users){
        if(users.length != 0){
            Role.findById(users[0].role).exec()
                .then( (role) => {
                    var salt = users[0].salt;
                    var hash = users[0].hash;
                    var token = users[0].token;
                    var newpassword = salt + password;
                    var re_hash = crypto.createHash('sha512').update(newpassword).digest("hex");
                    var grav_url = gravatar.url(email, {s: '200', r: 'pg', d: '404'});
                    users[0].role = role;
                    users[0].grav_url = grav_url;
                    if(hash == re_hash){
                        callback({'message':"Login Sucess",'error':false,'user':users[0], 'grav_url': grav_url});
                    }else{
                        callback({'message':"Invalid Password",'error':true});
                    }
                })
                .catch( err => callback({'message': err,'error':true}))
        }else {
            callback({'message':"User not exist",'error':true});
        }
    });
};

var register = function(req,callback) {
    paramValidators.validateUser(req, function (valid, errors) {
        if(valid){
            var body = req.body;
            var email = cleanString(body.email);
            var password = cleanString(body.password);
            var role = cleanString(body.role);
            var gender = cleanString(body.gender);
            var firstname = cleanString(body.firstname);
            var lastname = cleanString(body.lastname);
            var middlename = cleanString(body.middlename); //  ToDo: Should really validate all these parameters and create a laravel style validation class for 'em !
            if(validate.validateEmail(email)){
                if (validate.validatePassword(password)) {
                    User.find({email: email},function(err,users){
                        if(users.length == 0){
                            var user;
                            var newuser = {
                                email: email,
                                name: {first : firstname, middle : middlename, last : lastname},
                                gender: gender,
                                salt :hash.salt,
                                hash: hash.hash(password),
                                token: hash.token(email)
                            };
                            if(role == roles.LECTURER){
                                newuser.title = cleanString(body.title);
                                newuser.specialization = cleanString(body.specialization);
                                user = new Lecturer(newuser);
                            }else if(role == roles.STUDENT){
                                newuser.matric_no = cleanString(body.matric_no);
                                newuser.level = body.level;
                                newuser.rfid_uid = cleanString(body.rfid_uid);
                                user = new Student(newuser);
                            }else{
                                user = new User(newuser);
                            }
                            user.save(function (err) {
                                if (err) {
                                    if (err instanceof mongoose.Error.ValidationError) {
                                        callback({'response':"Invalid data"});
                                    }
                                    return next(err);
                                }
                                callback({'message':"Sucessfully Registered", 'error':false});
                            });
                        }else{

                            callback({'message':"Email already Registered", 'error':true});
                        }});}else{

                    callback({'message':"Password Weak", 'error':true});

                }}else{
                // console.log("Email" + email);
                callback({'message':"Email Not Valid", 'error':true});
            }
        }else{
            callback({'message': errors, 'error':true});
        }
    });
};

var update_rfid_uid = function(req,callback) {
    var body = req.body;
    var email = cleanString(body.email);
    var rfid_uid = cleanString(body.rfid_uid);
    User.findOne({email: email}, function (err, student) {
        student.rfid_uid = rfid_uid;
        student.save(function (err) {
            if(err) {
                callback({'message':"Update successful",'error':false});
            }else{
                callback({'message':"Unable to update " + err, 'error':false});
            }
        });
    });
};

var getUID = function(req,callback) {
    var uid = generate_uid();
    // var rfid_uid = "123 123 719 435";
    var rfid_uid = uid['s1']+" "+uid['s1']+" "+uid['s3']+" "+uid['s4'];
    uidExists(rfid_uid).then(function (exists) {    // Should really check more than once
        if(exists){
            console.log('RFID UID Exists, trying again!');
            uid = generate_uid();
            rfid_uid = uid['s1']+" "+uid['s1']+" "+uid['s3']+" "+uid['s4'];
        }
    });
    console.log('done');
    callback({'message': "Success",'uid':uid,'error':false})
};

var uidExists = function (rfid_uid) {
    return new Promise((resolve, reject) => {
        // reject and resolve are functions provided by the Promise
        // implementation. Call only one of them.

        // Do your logic here
        User.count({rfid_uid: rfid_uid}, function (err, count) {
            // PS. Fail fast! Handle errors first, then move to the
            // important stuff (that's a good practice at least)
            if (err) {
                // Reject the Promise with an error
                return reject(err)
            }
            // console.log(count);
            return resolve(count > 0)
        });
    })
};

module.exports = {'register' : register, 'login': login, 'update_rfid_uid': update_rfid_uid, 'getUID': getUID};