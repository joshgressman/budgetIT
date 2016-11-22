var express = require('express');
var router = express.Router();

//requre budget model
var Expense = require('../models/expenses');

//*******************POST BUDGET******************************//
router.post('/', function(req,res){
console.log('POST', req.body);
var expense = Expense(req.body);
expense.save(function(err){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.sendStatus(201); // created
});
});



///****************GET BUDGET BY MONTH**************************//////
router.get('/', function(req, res){
Expense.find(data, function(err, expense){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.send(expense);
});
});

module.exports = router;
