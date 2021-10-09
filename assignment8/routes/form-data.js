var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.post('/',jsonParser, function(req, res, next) {

    const name=req.body.name;
    const surname=req.body.surname;
    const age=req.body.age;

    res.render('form-data', {
        name:name,
        surname:surname,
        age:age
    });
});

module.exports = router;