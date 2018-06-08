const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const FeatureSchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    parent: {
        type: String,
    },
    feature_name: {
        type: String,
    },

});


module.exports = mongoose.model('features', FeatureSchema);
