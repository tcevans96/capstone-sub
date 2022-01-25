const router = require('express').Router();
const userController = require('../controllers/userController');


router.route('/').get(userController.index)
.post(userController.newUser);

router.route('/profile').get(userController.getUser)

module.exports = router;