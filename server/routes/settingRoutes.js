const express = require('express');
// -----------
// Controllers
const settingController = require('../controllers/settingController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias

router.use(authController.protect, authController.restrictTo('admin'));
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
