/**
 * Created by lon on 10/9/16.
 */
var mongoose = require('mongoose');

var RoleSchema = mongoose.Schema({
    title: String,
    slug: String,
}, {collection: 'roles', timestamps: {}});

var Role = mongoose.model('role', RoleSchema);

module.exports = Role;
