var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

//Assignment 9a
router.post('/', jsonParser,function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');

  const num1=parseInt(req.body.num1);
  const num2=parseInt(req.body.num2);
  const operation=req.body.operation;

  var result=0;

  if(operation==="SUM"){
    result=(num1+num2);
  }
  if(operation==="SUB"){
    result=(num1-num2);
  }
  if(operation==="DIV"){
    result=(num1/num2);
  }
  if(operation==="MUL"){
    result=(num1*num2);
  }
  res.send(JSON.stringify({ result: result }))
});

module.exports = router;