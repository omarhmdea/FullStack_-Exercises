const encrypt = function (str) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = []

    for (let index = 0; index < str.length; index++) {
        newStr.push(alphabet[ alphabet.indexOf(str[index]) + 1])
    }
    return newStr.join('')
}

console.log(encrypt('cat'))
