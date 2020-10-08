const express = require('express');
// -----------
// Controllers
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias
router.get('/isLogin', authController.isLogin);
router.get('/logout', authController.logout);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgetPassword', authController.forgetPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
// Only Admin
router.use(authController.restrictTo('admin'));
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
