const express = require('express');
const pageController = require('../controllers/pageController');
let appRouter = express.Router();

const jwt = require('../service/auth'); 
const multer = require('multer');
multer({dest: 'uploads/'})

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname.replace(/\s+/g, '-').toLowerCase())
    }, 
})

const uploads = multer({storage:storage});

// EndPoint: /api/page/

appRouter.route('/').get(pageController.getPage);

appRouter.route('/').post(pageController.createPage);

appRouter.route('/upload-logo').post(jwt.validateToken, uploads.single('logoPage'), pageController.updateLogo);

appRouter.route('/:pageId').put(pageController.updatePage);

appRouter.route('/:pageId').delete(pageController.deletePage);

module.exports = appRouter;
