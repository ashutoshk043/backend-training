const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover


const bookSchemaAssignment = new mongoose.Schema({
    bookName: {type: String, required: true},
    price:{indianPrice: String, europePrice: String },
    year : {type: String, default:2021},
    tags : [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
},
{timestamps:true}
)



module.exports = mongoose.model('BookDetail',bookSchemaAssignment) // insert book data.