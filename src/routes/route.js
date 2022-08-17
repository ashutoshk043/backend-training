const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController1 = require("../controllers/booksDataController");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)


router.post("/insertBookData", BookController1.insertBookdata)

router.get("/getBookList", BookController1.getBookList)

router.post("/getBooksInYear", BookController1.getbookInYear)

router.post("/getParticularBooks", BookController1.getParticularBook)

router.post('/getXINRBooks', BookController1.getXINRBooks)

router.post('/getRandomBooks', BookController1.getRandomBooks)



module.exports = router;