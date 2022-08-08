const express = require('express');
const abc = require('../introduction/intro')
// path of logger.js
const welcome = require('../logger/logger')
// path for helper.js
const batchDatas = require('../util/helper')
//path for validaor
const validateData = require('../validator/formatter')
//Path for loadas
const loadas = require("lodash")

const router = express.Router();
router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    //wlecome message
    console.log(welcome.Welcome_mess)
    //Current Date
    console.log(batchDatas.curreDate)
    // //Current Month
    console.log(batchDatas.newMonth)
    // //current Batch Data
    console.log(batchDatas.batchData)
    // //removing spaces..
    console.log(validateData.strTrim)
    // //change to lower Case..
    console.log(validateData.changeLetterToLower)
    // //change to upper Case
    console.log(validateData.upperCaseLetter)
    res.send('My second ever api!')
//code to get months in chunk..
    const monthArray = ["jan", "Feb", "Mar", "Apr", "May", "june", "jul", "Aug", "sep","oct", "Nov", "Dec"]
    const splitMonth = loadas.chunk(monthArray,3)
    console.log(splitMonth)
//first 10 odd nos...
const oddArray = [2,3,5,7,9,11,13,15,17,19]
const subArray = loadas.tail(oddArray,9)
console.log(subArray)

//removing dublicate marged numbers....
const dubValue = [1,1,1,1,2,2,2,3,3,3,3,4,4,4,4]
const unMatchedNos = loadas.union(dubValue)
console.log(unMatchedNos)
//key value pair using loadas
const letValues = [ ["horror","The Shining"], ["drama","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"] ]
const emptyObj = loadas.fromPairs(letValues,1)
console.log(emptyObj)


});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason