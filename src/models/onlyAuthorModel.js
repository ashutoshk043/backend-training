const { default: mongoose } = require("mongoose");

const authorSchema = new mongoose.Schema({
        
    author_id:{type:Number, require: true},
    author_name:String,
    age:Number,
    address: mongoose.Schema.Types.Mixed

},
{timestamps:true})

module.exports = mongoose.model('authorDetail', authorSchema)