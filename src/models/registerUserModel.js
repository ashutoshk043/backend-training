const mongoose = require('mongoose');

const regUserSchema = new mongoose.Schema({

    firstName : String,

    lastName : String,

    mobile : {type : String, required : true},

    emailId : String,

    password : String,

    gender : {type:String, enum: ['male', 'female','others']},

	isDeleted: {type:Boolean, default: true}, //default value is false 

    age : Number,

},
{timestamps:true})

module.exports = mongoose.model("registeredUniqueUser", regUserSchema)