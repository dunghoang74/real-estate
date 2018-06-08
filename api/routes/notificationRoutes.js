const express = require('express');
const notificationController = require('../controllers/notificationController');
let appRouter = express.Router();

// EndPoint: /api/notification/

appRouter.route('/').get(notificationController.getNotifications);

appRouter.route('/').post(notificationController.createNotification);

module.exports = appRouter;