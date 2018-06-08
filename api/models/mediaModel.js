const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const MediaSchema = new Schema({
    img_name: {
        type: String,
    },
    img_desc: {
        type: String,
    },
    plan_name: {
        type: String,
    },
    plan_desc: {
        type: String,
    },
    youtube_url: {
        type: String,
    },
    matterport_url: {
        type: String,
    },
    _property : {type:ObjectId, ref:'properties'},

});


module.exports = mongoose.model('medias', MediaSchema);
