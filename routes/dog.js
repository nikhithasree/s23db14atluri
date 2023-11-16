var express = require('express');
var router = express.Router();
const dog_controllers = require('../controllers/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dog', { title: 'Search Results dog' });
  //GET request for one costume.
  router.get('/dog/:id', dog_controller.dog_detail)
});

/* GET detail dog page */
router.get('/detail', dog_controllers.dog_view_one_Page);
module.exports = router;

/* GET create dog page */
router.get('/create', dog_controllers.dog_create_Page);

/* GET create update page */
router.get('/update', dog_controllers.dog_update_Page);

/* GET delete dog page */
router.get('/delete', dog_controllers.dog_delete_Page);
