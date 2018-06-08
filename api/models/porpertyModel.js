const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PropertySchema = new Schema({
    title: {
        type: String,
        default: 'Thi is the tiel come from the model',
    },
    description: {
        type: String,
        default: 'Thi is the description come from the model',
    },
    room: {
        type: Number,
        default: 0
    },
    bath: {
        type: Number,
        default: 0
    },
    antiquity:{
        type: String,
        enum: ['building', 'new', 0],
        default: 0,
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
    project_status: {
        type: String,
        enum: ['plans', 'building', 'pre_sale', 'sale'],
    },
    project_type: {
        type: String,
        enum: ['horizontal', 'vertical'],
    },
    assigment_status: {
        type: String,
        enum: ['assigned', 'on_hold'],
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
    price_from: {
        type: Number,
    },
    total_units: {
        type: Number,
    },
    time_delivery: {
        type: String,
        enum:['inmediata', '1° trimestre','2° trimestre','3° trimestre',
        '4° trimestre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    },
    year_delivery: {
        type: String,
        enum:['2018', '2019', '2020', '2021', '2022', '2023']
    },
    dimation: {
        m2_built:{type:Number},
        m2_total:{type:Number},
    },
    status: {
        type: String,
        enum: ['on_sale', 'sold'],
        default: 'on_sale'
    },
    closed_price: {
        type: Number,
    },
    wish_listed: {
        type: Number,
        default: 0
    },
    hits: {
        type: Number,
        default: 0
    },
    featured: {
        type: Number,
        default: 0
    },
    tags:{
        type: [String],
    },
    address:{
        type: String,
    },
    geoloc: {
        type: { type: String },
        coordinates: []
    },
    draf:{
        type: Boolean,
        default: false,
    },
    commision_type:{
        type: String,
        enum: ['percentage', 'fix_value'],
    },
    commision_value:{
        type: Number,
    },
    // this has to be set as unique later
    catastro: {
        type: String,
        // unique: true,
    },
    _creator  : {type:ObjectId, ref:'users'},
    _category : {type:ObjectId, ref:'categories'},
    _zone : {type:ObjectId, ref:'zones'},
    _features : [{type:ObjectId, ref:'features'}],
    _property_units : [{type:ObjectId, ref:'property_units'}],
    _unit_type: {type:ObjectId, ref:'categories'},

},{timestamps: true});


module.exports = mongoose.model('properties', PropertySchema);



// {
// 	"title":"Properti number one and main",
// 	"description":"this is the description",
// 	"room":2,
//     "bath":3,
//     "_creator":"5b16599998ce35595b133d70",
//     "price": {"to_sell":2323, "to_rent":34534},
//     "tags":["zona rosa", "tag2", "tag3"],
//     "geoloc": {"coordinates":[1232,-999]},
//     "project_type": "horizontal"
// }