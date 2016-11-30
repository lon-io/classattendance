var express = require('express');
var router = express.Router();

// // this is good enough for now but you'll
// // want to use connect-mongo or similar
// // for persistant sessions
// router.use(express.cookieParser());
// router.use(express.session({ secret: 'building a blog' }));
// router.use(express.bodyParser());
//
// // expose session to views
// router.use(function (req, res, next) {
//   res.locals.session = req.session;
//   next();
// });

module.exports = router;

