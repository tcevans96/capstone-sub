const router = require('express').Router();
const userController = require('../controllers/userController');


router.route('/')
    .get(userController.index)
    .post(userController.newUser)
    
router.route('/subs')
    .get(userController.subIndex)    
    .post(userController.userSubs);


module.exports = router;