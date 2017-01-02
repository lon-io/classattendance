/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Role = require('./src/server/app/models/index').role;
var User = require('./src/server/app/models/index').user;
var util = require('util')
var crypto = require('crypto');
var hash = require('./src/server/app/helpers/hash');

var admin = new Role({
    title: 'Admin',
    slug: 'admin'
});
var redactor = new Role({
    title: 'Redactor',
    slug: 'redactor'
});
var user = new Role({
    title: 'User',
    slug: 'user'
});

var admin1 = new User({
    email: 'admin1@eee.oau',
    name: {first : 'Admin1', middle : 'O.', last : 'admin1'},
    salt :hash.salt,
    hash: hash.hash('administrator'),
    token: hash.token('admin1@eee.oau'),
    title: 'Prof.',
    specialization: 'Control and Instrumentation'
});

var admin2 = new User({
    email: 'admin2@eee.oau',
    name: {first : 'Admin2', middle : 'O.', last : 'admin2'},
    salt :hash.salt,
    hash: hash.hash('administrator'),
    token: hash.token('admin2@eee.oau'),
    title: 'Prof.',
    specialization: 'Power'
});

var rolesExist =  () => {
    return Role.find({ $or: [{'slug':'admin'},{'slug':'redactor'},{'slug':'user'}] }).exec()
};

var createRoles = () => {
    return new Promise(
        (resolve, reject) => {
            let errors = [];
            let successes = [];
            admin.save()
                .then( doc => {
                    successes.push("Sucessfully Created Admin Role")
                    return redactor.save()
                })
                .then( doc => {
                    successes.push("Sucessfully Created Redactor Role")
                    return user.save()
                })
                .then( doc => {
                    successes.push("Sucessfully Created User Role")
                    if(errors.length)
                        reject(errors)
                    else
                        resolve(successes)
                })
                .catch( err  =>  errors.push(err.stack))
        });
}

var createUsers = () => {

    var getAdminRole = Role.findOne({'slug':'admin'});

    return new Promise(
        (resolve, reject) => {
            let promise = getAdminRole.exec();
            promise
                .then(role => {
                    console.log(JSON.stringify(role))
                    admin1.role = role._id;
                    admin2.role = role._id;
                    return admin1.save()
                })
                .then( user1 => {
                    console.log('Admin 1 created ' + JSON.stringify(user1))
                    return admin2.save()
                })
                .then( user2 => {
                    console.log('Admin 2 created: ' + JSON.stringify(user2))
                    resolve(user2)
                })
                .catch( err => {
                    console.log("Error in create users function " + err)
                    reject(err)
                })
        });
}

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/classattendance', function (err) {
    if (err) throw err;
    rolesExist()
        .then(roles => {
            if(!roles.length){
                console.log('No prior roles');
                createRoles()
                    .then( res => {
                        console.log ('Success creating roles: ' + util.inspect(res))
                        return createUsers()
                    })
                    .then( res => {
                        console.log ('Success creating administrators: ' + util.inspect(res))
                        mongoose.connection.close()
                    })
                    .catch( errors => {
                        console.log('There were errors creating roles or administrators: ' + util.inspect(errors))
                        mongoose.connection.close();
                    })
            }else{
                console.log('Exist' + roles);
                mongoose.connection.close();
            }
        })
        .catch(errors => {
            console.log('There were errors: ' + util.inspect(errors))
            mongoose.connection.close();
        })
});

