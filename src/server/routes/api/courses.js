/**
 * Created by lon on 11/5/16.
 */
var express = require('express');
var router = express.Router();
var Course = require('../../app/models').course;
var Students = require('../../app/models').student;
var Lecturers = require('../../app/models').lecturer;

// APIs
// select all
router.get('/courses', function(req, res) {
    Course.find({})
        .populate('coordinator')
        .populate('students')
        .exec()
        .then(docs => {
            return res.json(docs)
        })
        .catch(err => {
            return console.error(err);
        })
});

// Get Courses for Lecturer
router.get('/courses/:lecturer_id', function(req, res) {
    Course.find({coordinator:req.params.lecturer_id})
        .populate('coordinator')
        .populate('students')
        .exec()
        .then(docs => {
            return res.json(docs)
        })
        .catch(err => {
            return console.error(err);
        })
});

// count all
router.get('/courses/count', function(req, res) {
    Course.count(function(err, count) {
        if(err) return console.error(err);
        res.json(count);
    });
});

// create
router.post('/course', function(req, res) {
    var obj = new Course(req.body);
    obj.save(function(err, obj) {
        if(err) return console.error(err);
        Course
            .populate(obj, ['coordinator', 'students'], (err, doc) => {
                if(err) return console.error(err);
                res.status(200).json(doc);
            });
    });
});

// find by id
router.get('/course/:id', function(req, res) {
    Course.findOne({_id: req.params.id})
        .populate('coordinator')
        .populate('students')
        .exec()
        .then(doc => {
            return res.json(doc);
        })
        .catch(err => {
            return console.error(err);
        })
});


// find by coursecode
router.get('/coursecode/:code', function(req, res) {
    Course.findOne({code: 'EEE ' + req.params.code})
        .populate('coordinator')
        .populate('students')
        .exec()
        .then(doc => {
            if(doc !== null) {
                console.log("found");
                return res.json(doc)
            }else {
                return res.json({error: true, message: "No such Course"})
            }
        })
        .catch(err => {
            return console.error(err);
        })
});

// update by id
router.put('/course/:id', function(req, res) {
    Course.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(err, doc) {
        if(err) return console.error(err);
        Course
            .populate(doc, ['coordinator', 'students'], (err, doc) => {
                if(err) return console.error(err);
                res.status(200).json(doc);
            })
    })
});

// delete by id
router.delete('/course/:id', function(req, res) {
    Course.findOneAndRemove({_id: req.params.id}, function(err) {
        if(err) return console.error(err);
        res.sendStatus(200);
    });
});

module.exports = router;
