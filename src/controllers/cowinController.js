let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const dataBydistrict = async (req, res) => {
    try {
        let district = req.query.district_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ status: true, data: result.data })
    } catch (error) {
        res.status(500).send({ status: error.message })
    }
}


const getDetailsAccToCities = async (req, res) => {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let citiesDetails = []
        for (let i = 0; i < cities.length; i++) {
            let obj = {}
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=45093faaeb9e461a559c33a86cfbc377`
            }

            let result = await axios(options)
            obj.city = cities[i]
            obj.temp = result.data.main.temp
            citiesDetails.push(obj)
        }
        let sorted = citiesDetails.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, data: sorted })
    } catch (err) {
        res.status(500).send({ status: err.message })
    }

}

const createMeme = async (req, res) => {

    try {
        let datas = req.query
        let Id = datas.template_id, text0 = datas.text0, text1 = datas.text1, userId = datas.username, pass = datas.password
    
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${Id}&text0=${text0}&text1=${text1}&username=${userId}&password=${pass}`
        }
        const result = await axios(options)
        res.send({ msg: result.data }) 
    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.dataBydistrict = dataBydistrict
module.exports.getDetailsAccToCities = getDetailsAccToCities
module.exports.createMeme = createMeme