const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PageSchema = new Schema({
    color1: {
        type: String,
    },
    color2: {
        type: String,
    },
    color3: {
        type: String,
    },
    logo: {
        type: String,
    },
    header: {
        type: String,
    },
    footer: {
        type: String,
    },
    network_listing: {
        type: Boolean,
        default: True,
    },
    domain:{
        type: String
    },
    subfolder:{
        type: String
    },
    facebook:{
        type: String
    },
    twitter:{
        type: String
    },
    linkedin:{
        type: String
    },
    _properties : [{type:ObjectId, ref:'properties'}],

});


module.exports = mongoose.model('pages', PageSchema);
