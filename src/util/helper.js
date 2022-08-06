
let currDate = function () {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return today
}
let curreDate =  currDate()
// console.log(curreDate)

let currMonth = function(){
    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","August","Sep","Nov","Dec"];
    const date = new Date();
    let monthName = months[date.getMonth()];
    return monthName
}

let newMonth = currMonth()
// console.log(newMonth)
let getBatchInfo = function(){
    const batchName = "Plutonium", week = "4th week", day = "3rd Day", todaysTopic = "introduction to NodeJs"
    return batchName + " "+ week + " "+ day + " "+  todaysTopic
}
let batchData = getBatchInfo()
// console.log(batchData)

module.exports.curreDate = curreDate
module.exports.newMonth = newMonth
module.exports.batchData = batchData