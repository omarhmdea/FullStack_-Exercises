function findFactorial(num) {
    if (num === 1) { return num }
    return num * findFactorial(num - 1)
}

console.log(findFactorial(5));