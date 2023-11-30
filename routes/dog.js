var express = require('express');
var router = express.Router();
const dog_controllers = require('../controllers/dog');

const secured = (req, res, next) => {
  if (req.user) {
      return next();
  }
  res.redirect("/login");
}
/* GET home page. */
router.get('/', dog_controllers.dog_view_all_Page);
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('dog', { title: 'Search Results dog' });
  //GET request for one costume.
  router.get('/dog/:id', dog_controllers.dog_detail);

/* GET detail dog page */
router.get('/detail', secured,dog_controllers.dog_view_one_Page);


/* GET create dog page */
router.get('/create', secured, dog_controllers.dog_create_Page);

/* GET create update page */
router.get('/update', secured, dog_controllers.dog_update_Page);

/* GET delete dog page */
router.get('/delete', secured, dog_controllers.dog_delete_Page);
module.exports = router;