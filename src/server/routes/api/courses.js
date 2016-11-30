/**
 * Created by lon on 11/5/16.
 */
var express = require('express');
var router = express.Router();
var Course = require('../../app/models').course;

// APIs
// select all
router.get('/courses', function(req, res) {
    console.log("Courses called");
    Course.find({}, function(err, docs) {
        if(err) return console.error(err);
        res.json(docs);
    });
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
        res.status(200).json(obj);
    });
});

// find by id
router.get('/course/:id', function(req, res) {
    Course.findOne({_id: req.params.id}, function(err, obj) {
        if(err) return console.error(err);
        res.json(obj);
    })
});

// update by id
router.put('/course/:id', function(req, res) {
    Course.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
        if(err) return console.error(err);
        res.sendStatus(200);
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