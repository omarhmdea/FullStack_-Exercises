const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')
const moment = require('moment');


const ExpenseList = []



router.get('/expenses', function (req, res) {
    let date1 = moment(req.query.d1, "DD-MM-YYYY");
    let date2 = moment(req.query.d2, "DD-MM-YYYY");

    if(req.query.d1 && req.query.d2){

        const filter = {'date': {$gte: date1 , $lse: date2} }

        Expense.find(filter, function (err, data) {
            res.send(data);
        })
    }
    res.send({"massage": date1.valueOf()})
    // Expense.find({}, function (err, data) {
    //     res.send(data);
    // }).sort({ date: -1 })
})

router.post('/expenses', function (req, res) {

    const newExpense = new Expense(
        {
            item: req.body.item,
            amount: req.body.amount,
            date: req.body.date ? moment(req.body.date).format('LLLL') : moment(new Date()).format('LLLL'),
            group: req.body.group
        }
    )
    newExpense.save()
    
})

router.put('/expenses', function (req, res) {
console.log("in put");
    const filter = { group: req.body.group1 };
    const update = { group: req.body.group2 };

    const e =  Expense.findOneAndUpdate(filter, update ,function(err, doc){
        res.send({
            "Expense Name": doc.item,
            "Group befor change": doc.group,
            "Group after  change": req.body.group2
        })
    })
    
    
})

router.get('/expenses/:group/:total?', function (req, res) {
    if(req.params.total === 'true'){

        const filter = {'group': req.params.group }

        const e = Expense.aggregate([
            { $match: filter },
            { $group: {
                _id: '$id',
                total_amount: { $sum: '$amount'}}
            },
        ]).exec(function(err, doc){
            res.send(doc)
        })
        
    }
    else {
        const filter = {'group': req.params.group }

        Expense.find(filter, function (err, data) {
            res.send(data);
        })
    }
    
})
module.exports = router