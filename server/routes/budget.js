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

router.put('/:id', function(req, res){
  var budget = req.body;
  console.log('req.body', req.body);
  var id = req.params.id;
  console.log('id',req.params.id);
  Expense.findByIdAndUpdate(id,budget, function(err, budget){
    if(err){
      return res.sendStatus(500);

    }
    console.log("success");
    res.status(204).send(budget);
  });
});


router.delete('/:id', function(req, res){
  var id = req.params.id;
  Expense.findByIdAndRemove(id, function(err){
    if(err){
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
