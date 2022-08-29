const registerModel = require('../models/registerUserModel')
const jwt = require('jsonwebtoken')
const { findByIdAndUpdate } = require('../models/userModel')

const users = async (req, res) => {
    data = req.body

    let regUser = await registerModel.create(data)

    res.send({ msg: regUser })
}


const login = async (req, res) => {
    let details = req.body
    let rEmailId = details.emailId
    let rPass = details.password
    let findUser = await registerModel.findOne({emailId:rEmailId, password:rPass})
    if(!findUser) res.send({error:"Either Email or Password Incorrect" })
    
    let token = await jwt.sign({userId: findUser._id.toString()}, 'Secrete_key');
    res.send({status:true, Token_is:token })
}

const getUserData = (req, res) =>{
    let token = req.headers["x-auth-token"]
    let validToken = jwt.verify(token,'Secrete_key')
    console.log(validToken)
    if(!validToken){
       res.send({error:"Invalid Token"})
    } else{
        res.send({status:true, msg: "Token Validated"})
    }

}

const updateUser = async (req, res) =>{
    let data = req.params
    let rUserId = data.userId.toString()
    let findUser = await registerModel.findById(rUserId)
    if(!findUser) res.send({error:"User Does not exists.."})

    let updatedDetails = await registerModel.findByIdAndUpdate({_id:rUserId}, req.body, {new:true} )
    res.send({upadtedData : updatedDetails})
}

const deleteUser = async (req, res) =>{
    let data = req.params
    let rUserId = data.userId.toString()

    let findUser = await registerModel.findById(rUserId)
    if(!findUser) res.send({error: "User Does not exists..."})
    findUser.isDeleted = true
    res.send({status:true, NewStatus: findUser})

}


module.exports.users = users
module.exports.login = login
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser