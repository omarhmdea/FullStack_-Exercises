const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = function (returnTime){
    const time = new Date()
    return returnTime(time)
}  
getTime(returnTime)