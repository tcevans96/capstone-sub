const router = require('express').Router();
const userController = require('../controllers/userController');


router.route('/')
    .get(userController.index)
    .post(userController.newUser)
    
router.route('/:userId')
    .get(userController.subIndex)    
    .post(userController.userSubs)
    

router.route('/subs/:name')
    .get(userController.getSub)
    .delete(userController.cancelSub);

module.exports = router;