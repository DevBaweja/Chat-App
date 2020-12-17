const express = require('express');
// -----------
// Controllers
const messageController = require('../controllers/messageController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias
router.use(authController.protect);

router
    .route('/my/:id')
    .get(messageController.getAllMyMessages, messageController.getAllMessages)
    .post(
        messageController.createMyMessage,
        messageController.createNewMessage
    );

router.use(authController.restrictTo('admin'));
// -----------
// Routes
router
    .route('/')
    .get(messageController.getAllMessages)
    .post(messageController.createNewMessage);

router
    .route('/:id')
    .get(messageController.getMessageById)
    .patch(messageController.updateMessageById)
    .delete(messageController.deleteMessageById);

module.exports = router;
