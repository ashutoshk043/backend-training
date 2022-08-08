const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})


const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

//API which gives list of movies...
router.get('/movies', function (req, res) {
    // const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies)
})

//API to get list of movies using index no..
router.get('/movies/:indexNo', function (req, res) {
    // const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const arryLength = movies.length
    const movieIndex = movies[req.params.indexNo]
    if(req.params.indexNo>=arryLength){
        res.send("Please inter valid index...")
    }
    res.send(movieIndex)
})
//array data in the form of an object....
const arrayObject = [{
    "id":1,
    "name":"The Shining"
},
{
    "id":2,
    "name":"Incendies"  
},
{
    "id":3,
    "name":"Rang De Basanti"    
},
{
    "id":4,
    "name":"Finding Nemo"     
}
]

router.get('/films', function(req, res){
    res.send(arrayObject)
})

router.get('/films/:filmId',function(req,res){
    let flag=0
    const filmId=req.params.filmId
    for(let i=0;i<arrayObject.length;i++)
    {
        if(arrayObject[i].id==filmId){
            flag=1
            res.send(arrayObject[i])
        }  
     }
     if(flag==0)
        res.send('No films exist in this Id')  
})


module.exports = router;