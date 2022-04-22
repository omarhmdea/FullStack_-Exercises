const story = `In the beginning there was light. Then there were wolves. 
                Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, 
                the fire caused one heck of a lot of damage.`

const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

function wordCountSplit(text) {
    const words = text.toLowerCase().split(/[.,'"?!;\s]/)
    for (const word of words) {
        if(word in wordCounts)
            wordCounts[word]++
        else
            wordCounts[word] = 1
    }   
}
wordCountSplit(story)

console.log(wordCounts)