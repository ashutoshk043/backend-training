const  mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name : String,
    author_id: {type:Number, required: true},
    price : Number,
    ratings : mongoose.Schema.Types.Mixed
},
{timestamps:true})

module.exports = mongoose.model('authorBookDetails', bookSchema)






