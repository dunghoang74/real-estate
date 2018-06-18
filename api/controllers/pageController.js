const PageModel = require('../models/pageModel');
const multer = require('multer');

const createPage = (req, res, next) => {

    for(let i = 0; i < req.body.length; i++){
        const page = new PageModel(req.body[i]);

        page.save()
            .then(newCategory => {
                res.status(200).send(newCategory)
            })
            .catch(err => {
                res.status(500).send({error: "Something went wrong saving your category information", info: err});
            });
    }

};

const getPage = (req, res) => {
    PageModel.find({ /*_user: '5b25c20606e509b5af9b5373'*/})
        .populate('_user')
        .exec((err, resp) => res.status(200).send(resp));
};

const updatePage = (req, res) => {
    // PageModel.find({'parent': '/' + req.params.parent})
    //     .populate()
    //     .exec((err, resp) => res.status(200).send(resp));
}; 

const updateLogo = (req, res, next) => {
    const imageLogo = new PageModel();
    
    imageLogo.logo = req.file.filename;
    imageLogo._user = req.decoded.user._id;

    imageLogo.save()
        .then(newImg => {
            res.status(200).send(newImg)
        })
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving your logo", info: err});
        });
}

const deletePage = (req, res) => {
    // PageModel.find({})
    //     .populate()
    //     .exec((err, resp) => res.status(200).send(resp));
};

module.exports = {createPage, getPage, updatePage, deletePage, updateLogo};


