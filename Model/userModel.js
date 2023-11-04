const mongoose = require("mongoose")

// create schema
const userSchema = new mongoose.Schema({
    name:{type:String,
         require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        age:{
            type:Number
        }
},{timestamps:true})

// create Model
const User = mongoose.model('user', userSchema);
module.exports = User;