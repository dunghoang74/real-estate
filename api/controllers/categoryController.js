const CategoryModel = require('../models/categoryModel');

const createCategory = (req, res, next) => {

    for(let i = 0; i < req.body.length; i++){
        const category = new CategoryModel(req.body[i]);

        category.save()
            .then(newCategory => {
                res.status(201).send(newCategory)
            })
            .catch(err => {
                res.status(500).send({error: "Something went wrong saving your category information", info: err});
            });
    }

};

const getMainCategories = (req, res) => {
    CategoryModel.find({'parent':'/'})
        .populate()
        .exec((err, resp) => res.status(200).send(resp));
};

const getSubCategories = (req, res) => {
    CategoryModel.find({'parent': '/' + req.params.parent})
        .populate()
        .exec((err, resp) => res.status(200).send(resp));
};

const getCategories = (req, res) => {
    CategoryModel.find({})
        .populate()
        .exec((err, resp) => res.status(200).send(resp));
};


module.exports = {createCategory, getCategories, getMainCategories, getSubCategories};


