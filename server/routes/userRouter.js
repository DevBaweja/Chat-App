const express = require('express');
// -----------
// Controllers
const userController = require('../controllers/userController');

// Router
const router = express.Router();

// -----------
// Routes
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser);

module.exports = router;
