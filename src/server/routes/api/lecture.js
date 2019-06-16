/**
 * Created by lon on 1/18/17.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _ = require('underscore');
var Lecture = require('../../app/models').lecture;

function mongoose_contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i].toString() === obj) {
            return true;
        }
    }
    return false;
}

router.post('/lecture', (req, res) => {
    var lecture = new Lecture(req.body);
    lecture.save((err, lecture_) => {
        if(err) return console.error(err);
        return res.status(200).json(lecture_);
    })
});

router.get('/lectures/:course_id', (req, res) => {
    Lecture.find({course: req.params.course_id})
        .exec()
        .then(docs => {
            return res.json(docs)
        })
        .catch(err => {
            return console.error(err);
        })
});

// TODO: This should be moved to the web route dir
router.get('/lectures_/:course_id', (req, res) => {
    Lecture.find({course: req.params.course_id})
        .populate('course')
        .exec()
        .then(docs => {
            return res.json(docs)
        })
        .catch(err => {
            return console.error(err);
        })
});

router.put('/lecture/attendance/:lecture_id/:student_id', (req, res) => {
    // ToDo: ensure req.body is of the form -  {attendance: []}
    // new instructs mongoose to return the modified doc, which ostensibly, is needed by the device

    Lecture.findOne({_id: req.params.lecture_id})
        .exec()
        .then(doc => {
            let student_id = req.params.student_id;
            if (mongoose_contains(doc.attendance, student_id)){
                return res.json({error: true, message: "Already Registered"})
            }else{
                doc.attendance = req.body.attendance;
                doc.save()
                    .then(doc_ => {
                        return res.json(doc_)
                    })
                    .catch(err_ => {
                        return console.error(err_);
                    })
            }
        })
        .catch(err => {
            return console.error(err);
        });

    // Lecture.findOneAndUpdate({_id: req.params.lecture_id},  req.body, {new:true})
    //     .populate('attendance')
    //     .exec()
    //     .then(docs => {
    //         return res.json(docs)
    //     })
    //     .catch(err => {
    //         return console.log(err)
    //     })
});

// update by id
router.put('/lecture_/:id', function(req, res) {
    Lecture.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .populate(['attendance', 'course'])
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            return console.log(err);
        });
});

// delete by id
router.delete('/lecture/:id', function(req, res) {
    Lecture.findOneAndRemove({_id: req.params.id}, function(err) {
        if(err) return console.error(err);
        res.sendStatus(200);
    });
});

// find by id
router.get('/lecture/:id', function(req, res) {
    Lecture.findOne({_id: req.params.id})
        .populate(['course', 'attendance'])
        .exec()
        .then(doc => {
            return res.json(doc)
        })
        .catch(err => {
            return console.error(err);
        })
});

module.exports = router;