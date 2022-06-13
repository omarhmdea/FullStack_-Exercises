const letters = "abcdefghijklmnopqrstuzwxyz"

function highestScoringWord(str) {

    let MaxWordScore = 0
    let targetWord = ''


    for (const word of str.split(' ')) {
        let currentWordScore = countScore(word)

        if(currentWordScore > MaxWordScore){
            MaxWordScore = currentWordScore
            targetWord = word
        }
    }
    return targetWord
}
function countScore(str) {
    sum = 0

    for (const letter of str) {
        sum += letters.indexOf(letter) + 1
    }
    return sum
}

let str = 'omar'
str[0] = 'O'
console.log(str);
