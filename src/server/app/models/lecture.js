/**
 * Created by lon on 10/9/16.
 */
var mongoose = require('mongoose');

var Lectureschema = mongoose.Schema({
    course: {type: ObjectId, ref: 'course'},
    topic: String,
    about: {page: {raw: String, html: String}, bio: String},
    attendance: [{type: ObjectId, ref: 'student'}]
}, {collection: 'lectures', timestamps: {}});

var Lecture = mongoose.model('lecture', Lectureschema);

module.exports = Lecture;
