/**
 * Created by lon on 10/9/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CourseSchema = mongoose.Schema({
    title: String,
    code: String,
    units:  { type: Number, min: 1, max: 5 },
    about: {page: {raw: String, html: String}, bio: String},
    coordinator:{type: ObjectId, ref: 'user'},
    lecturers: { type: ObjectId, ref: 'user' },
    students: [{ type: ObjectId, ref: 'user' }],
    lectures: [{ type: ObjectId, ref: 'lecture' }],
    schedule: [{time : Date, venue : String}],
    recitations: [{ type: ObjectId, ref: 'recitations' }]
}, {collection: 'courses', timestamps: {}});

var Course = mongoose.model('course', CourseSchema);

module.exports = Course;