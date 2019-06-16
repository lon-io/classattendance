var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('user');
var cleanString = require('../../app/helpers/cleanString');
var hash = require('../../app/helpers/hash');
var crypto = require('crypto');


  router.get('/signup', function (req, res) {
    res.render('signup.jade');
  });

  // create new account
  router.post('/signup', function (req, res, next) {
    var email = cleanString(req.param('email'));
    var pass = cleanString(req.param('pass'));
    if (!(email && pass)) {
      return invalid();
    }

    User.findById(email, function (err, user) {
      if (err) return next(err);

      if (user) {
        return res.render('signup.jade', { exists: true });
      }

      crypto.randomBytes(16, function (err, bytes) {
        if (err) return next(err);

        var user = { _id: email };
        user.salt = bytes.toString('utf8');
        user.hash = hash(pass, user.salt);

        User.create(user, function (err, newUser) {
          if (err) {
            if (err instanceof mongoose.Error.ValidationError) {
              return invalid();
            } 
            return next(err);
          }

          // user created successfully
          req.session.isLoggedIn = true;
          req.session.user = email;
          console.log('created user: %s', email);
          return res.redirect('/');
        })
      })
    })

    function invalid () {
      return res.render('signup.jade', { invalid: true });
    }
  });

  
  router.get('/login', function (req, res) {
    res.render('login.jade');
  })

  router.post('/login', function (req, res, next) {
    // validate input
    var email = cleanString(req.param('email'));
    var pass = cleanString(req.param('pass'));
    if (!(email && pass)) {
      return invalid();
    }

    // user friendly
    email = email.toLowerCase();

    // query mongodb
    User.findById(email, function (err, user) {
      if (err) return next(err);

      if (!user) {
        return invalid();
      }

      // check pass
      if (user.hash != hash(pass, user.salt)) {
        return invalid();
      }

      req.session.isLoggedIn = true;
      req.session.user = email;
      res.redirect('/');
    });

    function invalid () {
      return res.render('login.jade', { invalid: true });
    }
  });

  router.get('/logout', function (req, res) {
    req.session.isLoggedIn = false;
    req.session.user = null;
    res.redirect('/');
  });

module.exports = router;