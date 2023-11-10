var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dog_controller = require('../controllers/dog');
const dog = require('../models/dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dogs ROUTES ///
// POST request for creating a hats.
router.post('/dog', dog_controller.dog_create_post);
// DELETE request to delete dogs.
router.delete('/dog/:id', dog_controller.dog_delete);
// PUT request to update dogs.
router.put('/dog/:id', dog_controller.dog_update_put);
// GET request for one dogs.
router.get('/dog/:id', dog_controller.dog_detail);
// GET request for list of all dogs items.
router.get('/dog', dog_controller.dog_list);
module.exports = router;


