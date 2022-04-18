
function printOddNumbers(arr){
    for (const item of arr) {
        if (!isEven(item)) {
            console.log(item);
        }
    }
}

const isEven = function(num){
    return num % 2 == 0
}


printOddNumbers([1,2,3,4,5])