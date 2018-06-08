const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PropertyUnitSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    room: {
        type: Number,
        default: 0
    },
    bath: {
        type: Number,
        default: 0
    },
    half_bath: {
        type: Number,
        default: 0
    },
    garage: {
        type: Number,
        default: 0
    },
    available_units: {
        type: Number,
        default: 0
    },
    price: {
        to_sell    :{type:Number},
        to_rent    :{type:Number},
        by_season  :{type:Number},
        to_transfer:{type:Number},
    },
    maintenance_price: {
        type: Number,
        default: 0
    },
    dimation: {
        m2_built:{type:Number},
        m2_total:{type:Number},
    },
    status: {
        type: String,
        default: 'on_sale'
    },
    wish_listed: {
        type: Number,
        default: 0
    },
    hits: {
        type: Number,
        default: 0
    },
    address:{
        type: String,
    },
    draf:{
        type: Boolean,
    },
    catastro: {
        type: String,
        unique: true,
    },
    _property : {type:ObjectId, ref:'properties'},
    _category : {type:ObjectId, ref:'categories'},
    _zone : {type:ObjectId, ref:'zones'},
    _features : [{type:ObjectId, ref:'features'}],
    _unit_type: {type:ObjectId, ref:'categories'},

},{timestamps: true});


module.exports = mongoose.model('property_units', PropertyUnitSchema);
