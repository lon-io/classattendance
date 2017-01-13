/**
 * Created by lon on 1/3/17.
 */

var express = require('express');
var router = express.Router();
var Students = require('../../app/models').student;
var Lecturers = require('../../app/models').lecturer;

router.get('/students', function(req, res) {
    Students.find({})
        .exec()
        .then(docs => {
            return res.json(docs)
        })
        .catch(err => {
            return console.error(err)
        });
});

router.get('/lecturers', function(req, res) {
    Lecturers.find({}).exec()
        .then(docs => {
            return res.json(docs)
        })
        .catch(err => {
            return console.error(err)
        });
});

module.exports = router;