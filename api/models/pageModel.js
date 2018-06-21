const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PageSchema = new Schema({
    logo: {
        public_id: String,
        secure_url: String,
        response: Schema.Types.Mixed,
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
        public_id: String,
        secure_url: String,
        response: Schema.Types.Mixed,
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
