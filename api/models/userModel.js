const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 11;
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    user_role: {
        type: String,
        enum: ['super_admin', 'admin', 'user'],
        default: 'user',
    },
    user_type: {
        type: String,
        enum: ['buyer', 'single_seller', 'real_state', 'constructor', 'runner'],
        default: 'buyer',
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    identification_id:{
        type: Number,
    },
    phone:{
        type: Number,
    },
    mobile:{
        type: Number,
    },
    wsp:{
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
    _contacted:[{ type:ObjectId, ref: 'properties' }],
    _seen:[{ type:ObjectId, ref: 'properties' }],
    _zone : {type:ObjectId, ref: 'zones'},
    _properties: [{ type:ObjectId, ref: 'properties' }],

},{timestamps: true});

UserSchema.pre('save', function(next) {
    let user = this;
    bcrypt.hash(this.password, SALT_ROUNDS, function(error, hash) {
        if (error) return next(error);
        user.password = hash;
        next();
    });
});

UserSchema.methods.checkPassword = function(plainTextPW) {
    return bcrypt.compare(plainTextPW, this.password);
};

module.exports = mongoose.model('users', UserSchema);


// {
// 	"name":"Carlos",
// 	"lastname":"Perez",
// 	"username":"carlitos",
//     "email":"carlos@gmail.com",
//     "password": "secure123",
//     "_properties": []
// }