const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

	userId: {type: ObjectId, ref: 'userDetail'},
	productId: {type: ObjectId, ref: 'product'},
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String  

})

module.exports = mongoose.model('Document', orderSchema)