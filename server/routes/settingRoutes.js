const express = require('express');
// -----------
// Controllers
const settingController = require('../controllers/settingController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// Authentication
router.use(authController.protect);
// -----------
// Alias
router
    .route('/mySetting')
    .get(settingController.getMySetting)
    .post(settingController.createMySetting)
    .patch(settingController.updateMySetting)
    .delete(settingController.deleteMySetting);

// Authorization
router.use(authController.restrictTo('admin'));
// -----------
// Routes
router
    .route('/')
    .get(settingController.getAllSettings)
    .post(settingController.createNewSetting);

router
    .route('/:id')
    .get(settingController.getSettingById)
    .patch(settingController.updateSettingById)
    .delete(settingController.deleteSettingById);

module.exports = router;
