const express = require('express');
const notificationController = require('../controllers/notificationController');
let appRouter = express.Router();

// EndPoint: /api/v1/notification/

appRouter.route('/').get(notificationController.getNotifications);

appRouter.route('/').post(notificationController.createNotification);

module.exports = appRouter;