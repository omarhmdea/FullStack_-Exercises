const express = require('express')
const api = require('./server/routes/api')

const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/', api)


const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})