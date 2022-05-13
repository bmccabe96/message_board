var express = require('express');
var moment = require('moment');
var router = express.Router();



const defaultMessages = [
  {
    text: "This message board is poppin",
    user: "Charles",
    added: moment().startOf('hour').fromNow(),
  },
  {
    text: "Wazzup",
    user: "Ralphy Ralph",
    added: moment().startOf('day').fromNow(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: defaultMessages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard'} );
});

module.exports = router;
