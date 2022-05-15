function firstMaxRepeatingCharacter(str) {
    let charsCounter = {}
    let max = 0
    let FMRC = null // First Max Repeating Character


    for (const char of str) {
        charsCounter[char] = ++charsCounter[char] || 1
        if(charsCounter[char] >  max || ( charsCounter[char] == max && str.indexOf(char) < str.indexOf(FMRC) )){
            max = charsCounter[char]
            FMRC = char
        }
    }
    
    return FMRC
}

let str = 'abbaccbb'
console.log(firstMaxRepeatingCharacter(str))

