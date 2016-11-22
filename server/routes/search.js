var express = require('express');
var router = express.Router();

//requre budget model
var Expense = require('../models/expenses'); //model scheema




/****************GET BUDGET BY MONTH**************************//////
router.post('/', function(req, res){
Expense.find({}, function(err, expense){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.send(expense);
});
});

module.exports = router;
