const mongoose = require ('mongoose');

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    otp: { 
        type: Number
     },
     isVerified:{
        type: Boolean,
        defaul: false
     }
},{timestamps: true})

const userAuthModel = mongoose.model('UserAuth', authSchema);
module.exports = userAuthModel;

