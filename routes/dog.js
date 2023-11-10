var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dog', { title: 'Search Results dog' });
  //GET request for one costume.
  router.get('/dog/:id', dog_controller.dog_detail)
});

module.exports = router;