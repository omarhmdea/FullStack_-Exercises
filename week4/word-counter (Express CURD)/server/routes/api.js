const express = require('express')
const router = express.Router()

const wordCounter = {}

router.get('/word/:word', function (req, res) {
    const input = req.params.word
    if (wordCounter[input] != undefined) {
        wordCounter[input]++
        res.send({ count: wordCounter[input] })
    } else {
        wordCounter[input] = 0
        res.send({ count: 0 })
    }
})

router.post('/word/:word', function (req, res) {
    const input = req.params.word
    if (wordCounter[input] != undefined) {
        wordCounter[input]++
    } else {
        wordCounter[input] = 1
    }
    let count = wordCounter[input]
    res.send({ text: `Added ${input}`, currentCount: { count } })

})

router.post('/words/:sentence', function (req, res, data) {
    const input = req.params.sentence
    const sentence = input.split(" ")
    let numNewWords = 0

    for (const word of sentence) {
        if (wordCounter[word] != undefined) {
            wordCounter[word]++
        } else {
            wordCounter[word] = 1
            numNewWords++
        }
    }
    const wordCounterLength = Object.keys(wordCounter).length
    res.send({ text: `Added ${numNewWords} words, ${wordCounterLength - numNewWords} already existed`, currentCount: wordCounterLength }
    )

})

router.delete('/word/:word', function (req, res) {
    const input = req.params.word
    if (wordCounter[input] != undefined) {
        delete wordCounter[input]
        res.send("Delete complete")
    } else {
        res.status(404).send("Word not found")
    }

})


module.exports = router