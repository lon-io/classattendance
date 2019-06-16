/**
 * Created by lon on 10/9/16.
 */
var crypto = require('crypto');
var hash = require('../../helpers/hash');
var cleanString = require('../../helpers/cleanString');
var mongoose = require('mongoose');
var User = require('../../models/index').user;
var Lecturer = require('../../models/index').lecturer;
var Student = require('../../models/index').student;
var gravatar = require('gravatar');
var roles = require('../../helpers/constants').roles;
var validate = require('../../helpers/validate');

var login = function(body,callback) {
    var email = cleanString(body.email);
    var password = cleanString(body.password);
    User.find({email: email},function(err,users){

        if(users.length != 0){

            var salt = users[0].salt;
            var hash = users[0].hash;
            var token = users[0].token;
            var newpassword = salt + password;
            var re_hash = crypto.createHash('sha512').update(newpassword).digest("hex");
            var grav_url = gravatar.url(email, {s: '200', r: 'pg', d: '404'});
            if(hash == re_hash){
                callback({'response':"Login Sucess",'res':true,'token':token,'grav':grav_url});
            }else{
                callback({'response':"Invalid Password",'res':false});
            }
        }else {
            callback({'response':"User not exist",'res':false});
        }
    });
};

var register = function(body,callback) {
    var email = cleanString(body.email);
    var password = cleanString(body.password);
    var role = cleanString(body.role);
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
                        newuser.level = cleanString(body.level);
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
                        callback({'response':"Sucessfully Registered"});
                    });
                }else{

                    callback({'response':"Email already Registered"});
                }});}else{

            callback({'response':"Password Weak"});

        }}else{
        console.log("Email" + email);
        callback({'response':"Email Not Valid"});
    }
};

module.exports = {'register' : register, 'login': login};