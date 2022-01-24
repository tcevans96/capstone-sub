const router = require('express').Router();
const subscriptionController = require('../controllers/subscriptionController');


router.route('/').get(subscriptionController.index);


module.exports = router;