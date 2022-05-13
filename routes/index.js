var express = require('express');
var moment = require('moment');
var router = express.Router();



const messages = [
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
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard'} );
});

router.post('/new', function(req, res, next) {
  const newMessage = {
    text: req.body.text, 
    user: req.body.user, 
    added: moment()
      .startOf('hour'- 1)
      .fromNow(),
  };
  messages.unshift(newMessage);
  res.redirect('/');
})

module.exports = router;
