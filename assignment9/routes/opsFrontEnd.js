var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('opsFrontEnd',{title:"Assignment 9"})
});

module.exports = router;
