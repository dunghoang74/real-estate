const express = require('express');
const propertyUnitController = require('../controllers/propertyUnitController');
let appRouter = express.Router();

// EndPoint: /api/property_unit/

appRouter.route('/').get(propertyUnitController.getPropertyUnits);

appRouter.route('/').post(propertyUnitController.createPropertyUnit);

module.exports = appRouter;