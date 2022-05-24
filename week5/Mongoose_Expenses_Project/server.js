const express = require('express')
const api = require('./server/routes/api')
const mongoose = require('mongoose')


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/Expense", { useNewUrlParser: true })

app.use('/', api)

const port = 4000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
