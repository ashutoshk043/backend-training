let userDetailsModel = require('../models/userDetailsModel')
let productDocument = require('../models/productDocumentModel')
let orderDocumentModel = require('../models/orderDocumentModel')


const userDetails = async (req, res) => {
    let userData = req.body
    let insertedData = await userDetailsModel.create(userData)
    res.send({ msg: insertedData })
}

const productDocumentDetails = async (req, res) => {
    let data = req.body
    let product = await productDocument.create(data)
    res.send({ msg: product })
}

const productDetails = async (req, res) => {
    let rAuthorId = req.body.userId
    let rProductId = req.body.productId

    let userIDs = await userDetailsModel.findById(rAuthorId)

    let productIDs = await productDocument.findById(rProductId)
    // we have to use use's balance and product price///

    if (!userIDs) {
        res.send({ msg: "User does not exists.." })
    }
    else if (!productIDs) {
        res.send({ msg: "Product not exists.." })
    }else{

    let paidUserStatus = req.headers["isfreeappuser"] // true or false from header
    // let cxUpComingBalance = req.body.amount
    let cxDbBalance = userIDs.balance
    let dbItemPrice = productIDs.price
    // console.log(cxDbBalance, "Cx db Balance")
    // console.log(dbItemPrice, "item price")

    if(paidUserStatus === "true"){
        //if free user is true
        req.body.amount = 0
        req.body.isFreeAppUser = true
        let order = await orderDocumentModel.create(req.body)
        res.send({orderDetails:order})
    }
    if (paidUserStatus !== "true" && cxDbBalance >= dbItemPrice) { // if freeAppUser is false
        let updatedCxBalance = cxDbBalance - dbItemPrice
        // console.log(updatedCxBalance, "Upadted Balance of Cx")

        let updatedCxAccount = await userDetailsModel.findOneAndUpdate({balance:userIDs.balance},{$set:{balance:updatedCxBalance}},{new:true})

        req.body.amount = dbItemPrice

        let orderDetail = await orderDocumentModel.create(req.body)
        res.send({orderDetails:orderDetail})
    }
    else if(paidUserStatus !== "true" && cxDbBalance < dbItemPrice){
        res.send({msg : "Insufficient Balance..."})
    }
    
}
}



module.exports.userDetails = userDetails
module.exports.productDocumentDetails = productDocumentDetails
module.exports.productDetails = productDetails