function firstNonRepeatingCharacter(str) {

    const RepeatingCharacter = {}
    let firstChar = null

    for (let index = 0; index < str.length; index++) {
        RepeatingCharacter[str[index]] = ++RepeatingCharacter[str[index]] || 1
        
    }
    for (let index = 0; index < str.length; index++) {
        if (RepeatingCharacter[str[index]] == 1) {
            firstChar = str[index]
            break
        }
    }
    return firstChar
}
console.log(firstNonRepeatingCharacter('abca'));