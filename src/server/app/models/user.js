var mongoose = require('mongoose');
var validEmail = require('../helpers/validate');
var util = require('util');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

//http://www.laplacesdemon.com/2014/02/19/model-inheritance-node-js-mongoose/
//https://blog.verticalaxisbd.com/inheritance-mongodb-mongoose/

function AbstractUserSchema() {
    Schema.apply(this, arguments);

    this.add({
        email: {type: String, lowercase: true, trim: true, validate: validEmail.validateEmail}
        ,role: {type: ObjectId, ref: 'role'}
        , gender: {type: String}
        , name: {first: String, middle: String, last: String}
        , about: {page: {raw: String, html: String}, bio: String}
        , salt: {type: String, required: true}
        , hash: {type: String, required: true}
        , token: String
    });
}

util.inherits(AbstractUserSchema, Schema);

var UserSchema = new AbstractUserSchema({}, { collection: 'users', timestamps: {} });

// // properties that do not get saved to the db
UserSchema.virtual('fullname').get(function () {
    return this.name.first + ' ' + this.name.middle + ' ' + this.name.last;
});

UserSchema.virtual('type').get(function () { return this.__t; });

var User = mongoose.model('user', UserSchema); // our base model

module.exports = {UserModel: User, BaseSchema: AbstractUserSchema};
