var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/data', function(req, res, next) {
  res.render('data', {title: 'data' });
});

router.get('/info', function(req, res, next) {
  res.render('info', { title: 'info' });
});

router.get('/digital', function(req, res, next) {
  res.render('digital', { title: 'digital' });
});


router.get('/work', function(req, res, next) {
  res.render('work', { title: 'work' });
});

module.exports = router;
