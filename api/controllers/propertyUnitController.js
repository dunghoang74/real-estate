const PropertyUnitModel = require('../models/porpertyUnitModel');

const createPropertyUnit = (req, res, next) => {
    const property_unit = new PropertyUnitModel(req.body);

    property_unit.save()
        .then(newPropertyUnit => {
            res.status(201).send(newPropertyUnit)
        })
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving your property unit information", info: err});
        });

};

const getPropertyUnits = (req, res) => {
    PropertyUnitModel.find({})
        .populate()
        .exec((err, resp) => res.status(200).send(resp));
};


module.exports = {createPropertyUnit, getPropertyUnits};
