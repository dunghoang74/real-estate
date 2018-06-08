const PropertyModel = require('../models/porpertyModel');

const createProperty = (req, res, next) => {
    const property = new PropertyModel(req.body);

    property.save()
        .then(newProperty => {
            res.status(200).send(newProperty)
        })
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving your property information", info: err});
        });

};

const getProperties = (req, res) => {
    PropertyModel.find({})
        .populate('_creator')
        .exec((err, resp) => res.status(200).send(resp));
};


module.exports = {createProperty, getProperties};
