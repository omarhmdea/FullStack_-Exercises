const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person',function(req, res){
    let data = req.body
    let p1 = new Person({ firstName: data.firstName, lastName: data.lastName, age: data.age })
    p1.save()
    res.end()
})

router.put('/person/:id',function(req, res){
    let personId = req.params.id
    Person.findById({_id:personId}, function (err, person) {
        person.age = 100000
        person.save()
    }) 
    res.end()

})

router.delete('/apocalypse',function(req, res){
    Person.remove({}, function (err, person) {
        console.log(err);
    }) 
    res.end()

})

module.exports = router