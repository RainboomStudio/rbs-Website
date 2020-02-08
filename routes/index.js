var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rainboom Studio' });
});
router.get('/rainboom-engine', function(req, res, next) {
  res.render('rbe', { title: 'Rainboom Engine' });
});
module.exports = router;
