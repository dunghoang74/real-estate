const express = require('express');
const pageController = require('../controllers/pageController');
let appRouter = express.Router();
const jwt = require('../service/auth'); 

// EndPoint: /api/page/

appRouter.route('/username/:username').get(pageController.getPageByUserName);

appRouter.route('/:userId').get(pageController.getPageByUserId);

appRouter.route('/').post(pageController.createPage);

appRouter.route('/upload-logo').post(jwt.validateToken, pageController.uploadLogo);

appRouter.route('/upload-header').post(jwt.validateToken, pageController.uploadHeader);

appRouter.route('/upload-colors').post(jwt.validateToken, pageController.uploadColors);

appRouter.route('/:pageId').put(pageController.updatePage);

appRouter.route('/:pageId').delete(pageController.deletePage);

module.exports = appRouter;
