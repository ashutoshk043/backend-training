let auth = function (req, res, next){
    let data = req.params
    let rUserId = data.userId.toString()
    let token = req.headers["x-auth-token"]
    if(!token) res.send({error: "Token is not available in the header.."})

    next()
}

module.exports.auth = auth