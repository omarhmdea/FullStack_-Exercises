// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

//paresr
app.use(express.json())

app.use('/', api)



const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})