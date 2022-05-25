const arr1 = [1, 2, 3]
const arr2 = []

function swap(arr1, arr2) {
    if (arr1.length === 0) { return }
    arr2.push(arr1.shift())
    return swap(arr1, arr2)
}

swap(arr1, arr2)
console.log(arr1);
console.log(arr2);