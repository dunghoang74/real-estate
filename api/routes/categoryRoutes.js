const express = require('express');
const categoryController = require('../controllers/categoryController');
let appRouter = express.Router();

// EndPoint: /api/category/

appRouter.route('/').get(categoryController.getCategories);

appRouter.route('/main').get(categoryController.getMainCategories);

appRouter.route('/:parent').get(categoryController.getSubCategories);

appRouter.route('/').post(categoryController.createCategory);

module.exports = appRouter;