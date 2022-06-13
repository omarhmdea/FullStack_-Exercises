
function foo(num) {
    let pNum = 0
    function save(num) {
        return pNum + num
    }
    return save
}


console.log(foo(3)) // 3
console.log(foo(1)) // 4
console.log(foo(2)) // 3
console.log(foo(2)) // 4
console.log(foo(6)) // 8
