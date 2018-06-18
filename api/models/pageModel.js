const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PageSchema = new Schema({
    logo: {
        type: String,
    },
    color1: {
        type: String,
    },
    color2: {
        type: String,
    },
    color3: {
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
        default: true,
    },
    domain:{
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
    _user : {type:ObjectId, ref:'users'},

});

module.exports = mongoose.model('pages', PageSchema);
