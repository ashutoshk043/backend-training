const user = function(req, res, next){
    let data = req.headers["isfreeappuser"]
    if(data == null){
        res.send("request is missing a mandatory header")
    }else{
        next()
    }
    

}

module.exports.user = user