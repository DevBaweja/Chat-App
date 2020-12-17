const express = require('express');
// -----------
// Controllers
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias
router.get('/search/:name', userController.search, userController.getAllUsers);
router.get('/isLogin', authController.isLogin);
router.get('/logout', authController.logout);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgetPassword', authController.forgetPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Authentication
router.use(authController.protect);

router.get('/relation/:id', userController.getRelation);

router.patch('/password', authController.updatePassword);

router.patch('/status', userController.noPassword, userController.updateStatus);

router
    .route('/me')
    .patch(
        userController.noPassword,
        userController.uploadUserPhoto,
        userController.resizeUserPhoto,
        userController.updateMe
    )
    .delete(userController.deleteMe);

// Authorization
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
