const router = require('express').Router();
const subscriptionController = require('../controllers/subscriptionController');


router.route('/')
.get(subscriptionController.index);

router.route('/:id').delete(subscriptionController.cancelSub);


module.exports = router;