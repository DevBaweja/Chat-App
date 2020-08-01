const express = require('express');
// -----------
// Controllers
const messageController = require('../controllers/messageController');

// Router
const router = express.Router();

// -----------
// Alias

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
