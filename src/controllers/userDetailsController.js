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
    let rAuthorId = req.body.rAuthorId
    let rProductId = req.body.productId

    let userIDs = await userDetailsModel.findById(rAuthorId)

    let productIDs = await productDocument.findById(rProductId)

    // if (!userIDs) {
    //     res.send({ msg: "User does not exists.." })
    // } else if (!productIDs) {
    //     res.send({ msg: "Product not exists.." })
    // } else {
    //     let sales = await orderDocumentModel.create(req.body)
    //     res.send({ msg: sales })
    // }


}



module.exports.userDetails = userDetails
module.exports.productDocumentDetails = productDocumentDetails
module.exports.productDetails = productDetails