const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CountrySchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
    },
    abb: {
        type: String,
        unique: true,
    },

});

const StateSchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    abb: {
        type: String,
        unique: true,
    },
    _country_name  : {type:ObjectId, ref:'countries'},


});

const CitySchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    abb: {
        type: String,
        unique: true,
    },
    _state_name  : {type:ObjectId, ref:'states'},

});

const ZoneSchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    geoloc: {
        type: { type: String },
        coordinates: []
    },
    _city_name  : {type:ObjectId, ref:'cities'},

});


module.exports = mongoose.model('countries', CountrySchema);
module.exports = mongoose.model('states', StateSchema);
module.exports = mongoose.model('cities', CitySchema);
module.exports = mongoose.model('zones', ZoneSchema);
