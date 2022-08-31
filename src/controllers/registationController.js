const registerModel = require('../models/registerUserModel')
const jwt = require('jsonwebtoken')

const users = async (req, res) => {
    let data = req.body

    let regUser = await registerModel.create(data)
    res.status(200).send({ msg: regUser })
}


const login = async (req, res) => {
    let details = req.body
    let rEmailId = details.emailId
    let rPass = details.password
    let findUser = await registerModel.findOne({ emailId: rEmailId, password: rPass })
    if (!findUser) res.status(404).send({ error: "Either Email or Password Incorrect" })

    let token = jwt.sign({ userId: findUser._id }, 'Secrete_key');
    res.status(200).send({ status: true, Token_is: token })
}

const getUserData = async (req, res) => {
    try {
        let token = req.headers["x-auth-token"]
        let rUserId = req.params.userId
        let validToken = jwt.verify(token, 'Secrete_key')
        console.log(validToken)
        if (!validToken) {
            res.status(401).send({ error: "Invalid Token" })
        }
        if (rUserId != validToken.userId) {
            res.status(401).send({ error: "Unauthorised Access" })
        } else {
            let userData = await registerModel.findById(validToken.userId)
            res.status(200).send({ status: true, msg: userData })
        }
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message })
    }

}

const updateUser = async (req, res) => {
    try {
        let token = req.headers["x-auth-token"]
        let rUserId = req.params.userId
        let validToken = jwt.verify(token, 'Secrete_key')
        console.log(validToken)
        if (!validToken) {
            res.status(401).send({ error: "Invalid Token" })
        }
        if (rUserId != validToken.userId) {
            res.status(401).send({ error: "Unauthorised Access" })
        } else {
            let findUser = await registerModel.findById(rUserId)
            let updatedDetails = await registerModel.findByIdAndUpdate({ _id: rUserId }, req.body, { new: true })
            res.send({ upadtedData: updatedDetails })
        }
    }
    catch (error) {
        res.status(500).send({ status: "error", error: error.message })
    }
}



const deleteUser = async (req, res) => {
    try {
        let token = req.headers["x-auth-token"]
        let rUserId = req.params.userId
        let validToken = jwt.verify(token, 'Secrete_key')
        if (!validToken) {
            res.status(401).send({ error: "Invalid Token" })
        }
        if (rUserId != validToken.userId) {
            res.status(401).send({ error: "Unauthorised Access" })
        } else {
            let updatedStatus = await registerModel.findByIdAndUpdate({ _id: rUserId }, { $set: { isDeleted: true, upsert: true } }, { new: true })
            res.send({ status: true, NewStatus: updatedStatus })
        }
    }
    catch (error) {
        res.status(500).send({ status: "error", error: error.message })
    }
}


module.exports.users = users
module.exports.login = login
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser