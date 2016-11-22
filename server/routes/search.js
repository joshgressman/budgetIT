var express = require('express');
var router = express.Router();

//requre budget model
var Expense = require('../models/expenses'); //model scheema



//************************POST CALL FIND BY VARIBLE OBJECT DATA***************//

router.post('/', function(req, res){
  console.log(req.body);
Expense.find(req.body, function(err, expense){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.send(expense);
});
});
//****************************************************************************//
module.exports = router;
