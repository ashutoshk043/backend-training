let auth = function (req, res, next){
    try {
        let data = req.params
    let rUserId = data.userId.toString()
    let token = req.headers["x-auth-token"]
    if(!token) res.send({error: "Token is not available in the header.."})

    next()
    } catch (error) {
        res.status(500).send({status:"error", error:error.message})
    }
    
    
}

module.exports.auth = auth