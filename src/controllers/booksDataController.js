const bookModels = require('../models/bookModel')
// question 1
const insertBookdata = async function (req, res) {
    const receivedData = await bookModels.create(req.body)
    res.send(receivedData)
}

// question 2
const getBookList = async function (req, res) {
    const allBooks = await bookModels.find().select({authorName:1 , bookName: 1, _id: 0})
    res.send({msg:allBooks})
}
// question 3
const getbookInYear = async function(req, res){
    let year = await bookModels.find(req.body)
    res.send(year)
}
// question 4
const getParticularBook = async function(req, res){
    let inputSearch = await bookModels.find(req.body)
    res.send({msg:inputSearch})

} 
//question 5
const getXINRBooks = async function(req, res){
    let allPrices = await bookModels.find({"price.indianPrice":{ $in: [ "100INR", "200INR", "500INR"]}}).select({"price.indianPrice":1, "_id":0,"bookName":1})
    res.send(allPrices)
}

// question 6
const getRandomBooks = async function(req, res){
    let randomBooks = await bookModels.find({"totalPages":{$gt:500}}, {"stockAvailable":true}).select({"totalPages":1,"stockAvailable": true, "_id": 0})
    res.send(randomBooks)
}


module.exports.insertBookdata = insertBookdata
module.exports.getBookList = getBookList
module.exports.getbookInYear = getbookInYear
module.exports.getParticularBook = getParticularBook
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks