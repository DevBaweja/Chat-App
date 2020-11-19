const express = require('express');
// -----------
// Controllers
const requestController = require('../controllers/requestController');
const authController = require('../controllers/authController');

// Router
const router = express.Router();

// -----------
// Alias
router.use(authController.protect);

router
    .route('/sent')
    .get(requestController.getAllSentRequest, requestController.getAllRequests);

router
    .route('/sent/:id')
    .post(
        requestController.createSentRequest,
        requestController.createNewRequest
    )
    .delete(requestController.deleteSentRequest);

router
    .route('/receive')
    .get(
        requestController.getAllReceiveRequest,
        requestController.getAllRequests
    );

router.route('/receive/:id').patch(requestController.updateReceiveRequest);

router.use(authController.restrictTo('admin'));
// -----------
// Routes
router
    .route('/')
    .get(requestController.getAllRequests)
    .post(requestController.createNewRequest);

router
    .route('/:id')
    .get(requestController.getRequestById)
    .patch(requestController.updateRequestById)
    .delete(requestController.deleteRequestById);

module.exports = router;
