const express = require('express');
// -----------
// Controllers
const friendController = require('../controllers/friendController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias
router.use(authController.protect);

router
    .route('/myFriend')
    .get(friendController.getAllMyFriends, friendController.getAllFriends);

router
    .route('/myFriend/:id')
    .post(friendController.createMyFriend, friendController.createNewFriend)
    .patch(friendController.updateMyFriend);

router.use(authController.restrictTo('admin'));
// -----------
// Routes
router
    .route('/')
    .get(friendController.getAllFriends)
    .post(friendController.createNewFriend);

router
    .route('/:id')
    .get(friendController.getFriendById)
    .patch(friendController.updateFriendById)
    .delete(friendController.deleteFriendById);

module.exports = router;
