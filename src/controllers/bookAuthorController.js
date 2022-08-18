const bookAuthorModel = require('../models/bookAuthorModel')
const bookAuthor = require('../models/onlyAuthorModel')

const authorData = async (req, res)=>{
    let allAuthorData = await bookAuthorModel.create(req.body)
    res.send({allAuthors: allAuthorData})
}

const sendbookData= async (req, res)=>{
    let allBookData = await bookAuthorModel.create(req.body)
    res.send({'allBooks':allBookData})
}

const bookByChetanBhagat = async (req, res)=>{
    let chetanBook = await bookAuthor.find({author_name:"Chetan Bhagat"})
    let authorId = chetanBook[0].author_id
    let allBooksByAuthor = await bookAuthorModel.find({author_id: authorId }).select({name : 1, _id: 0})
    res.send({'AllBooksByChetan':allBooksByAuthor})
}


const updatePrice = async (req, res)=>{
    let author_data = await bookAuthorModel.findOneAndUpdate(
        {name: "Two states"},
        {$set:{price : 100}},
        {new : true}
        )
    let updatePrice = author_data.price
    let authorId = author_data.author_id
    let authorDetails = await bookAuthor.find({author_id:authorId})
    let authorName = authorDetails[0].author_name
    res.send({AuthorName:authorName, updatedPrice:updatePrice})
}

const autorNameWithBooks = async (req, res)=>{
    let authodIdAndBookName = await bookAuthorModel.find({price:{$gte:50, $lte:100}}) // will get author Id and book name
    let authorIds  = authodIdAndBookName.map(element=>element.author_id)
    let newDetails = await bookAuthor.find({author_id: authorIds}).select({author_name: 1, _id:0})

        res.send({AllBooks:newDetails})
    
} 



module.exports.authorData = authorData
module.exports.sendbookData = sendbookData
module.exports.bookByChetanBhagat = bookByChetanBhagat
module.exports.updatePrice = updatePrice
module.exports.autorNameWithBooks = autorNameWithBooks