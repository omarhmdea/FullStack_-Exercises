const reverse = function (str) {

    let reversed = []
    for (let index = str.length - 1; index >= 0; index--) {
        reversed.push(str[index])
    }
    return reversed.join('')
}

console.log(reverse("dog")) //should return "god"
console.log(reverse("race car")) //should return "rac ecar"