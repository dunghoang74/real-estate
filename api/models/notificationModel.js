const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const NotificationSchema = new Schema({
    read: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
    },
    message_type: {
        type: String,
        enum:['call','question','visit'],
    },
    _from_user: {type:ObjectId, ref:'users'},
    _to_user: {type:ObjectId, ref:'users'},
    _properties : [{type:ObjectId, ref:'properties'}],


},{timestamps: true});


module.exports = mongoose.model('notifications', NotificationSchema);
