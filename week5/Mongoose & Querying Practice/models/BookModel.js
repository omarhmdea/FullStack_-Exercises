const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    title: String,
    author: String,
    pages: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person

title
author
pages
genres
rating
