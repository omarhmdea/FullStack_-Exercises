const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    if(str.search(/^www\.[a-z]+\.com$/) != -1)
    return true
return false
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return false
console.log(urlValidator(thirdURL)) //return false
