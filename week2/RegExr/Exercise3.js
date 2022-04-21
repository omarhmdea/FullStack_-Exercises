const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function(str){
    if(str.search(/^[a-zA-Z]+@[a-zA-Z]+\.com$/) != -1)
        return true
    return false
}

console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return false
console.log(emailValidator(email3)) //return false