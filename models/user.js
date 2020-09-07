const mongoose = require('mongoose'); 
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique:true,
        // index:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    pic:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png'
    },
  
    // active:{
    //     type:Boolean,
    //     default:false
    // },
    resetToken:String,
    expireToken:Date,
});

module.exports = mongoose.model('User', userSchema);