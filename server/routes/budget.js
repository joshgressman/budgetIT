var express = require('express');
var router = express.Router();

//requre budget model
var Budget = require('../models/expenses');

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

module.exports = router;
