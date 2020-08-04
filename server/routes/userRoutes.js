const express = require('express');
// -----------
// Controllers
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias
router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.use(authController.protect);
// -----------
// Routes
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser);

router
    .route('/:id')
    .get(userController.getUserById)
    .patch(userController.updateUserById)
    .delete(userController.deleteUserById);

module.exports = router;
