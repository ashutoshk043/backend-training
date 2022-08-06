let trim = function(){
    const textWithSpace = "            Ashutosh Kumar            "
    const textAfterTrimSpace = textWithSpace.trim();
    return textWithSpace+" ===> text after trimming"+" "+ textAfterTrimSpace;

}
let strTrim = trim()
// console.log(strTrim)


let changeToLowerCase = function(){
    const textIs = "FUNCTIONUP CRASH COURCE"
    const lowerCase = textIs.toLowerCase();
    return lowerCase;
}

let changeLetterToLower = changeToLowerCase()
// console.log(changeLetterToLower)

let changeToUpperCase = function(){
    const lowerTextIs = "i am learining backend-development through nodejs"
    const upperCase = lowerTextIs.toUpperCase();
    return upperCase;
}

let upperCaseLetter = changeToUpperCase()
// console.log(upperCaseLetter)

module.exports.strTrim = strTrim
module.exports.changeLetterToLower = changeLetterToLower
module.exports.upperCaseLetter = upperCaseLetter