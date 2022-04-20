const printTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = function (printTime){
    const time = new Date()
    return printTime(time)
}  
getTime(printTime)
