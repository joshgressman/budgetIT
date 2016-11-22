var express = require('express');
var router = express.Router();

//requre budget model
var Budget = require('../models/expenses');

//*******************POST BUDGET******************************//
router.post('/', function(req,res){
console.log('POST', req.body);
var budget = Budget(req.body);
budget.save(function(err){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.sendStatus(201); // created
});
});



///****************GET BUDGET BY MONTH**************************//////
router.get('/', function(req, res){
Budget.find({}, function(err, budget){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.send(budget);
});
});

module.exports = router;
