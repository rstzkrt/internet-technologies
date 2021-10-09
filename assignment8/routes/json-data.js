var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.post('/',jsonParser, function(req, res, next) {

    const jsonData=JSON.stringify(req.body)

    const name=req.body.name
    const surname=req.body.surname
    const age=req.body.age

    res.type('application/json');
    res.render('json-data', {
        bodyReq:jsonData,// Test screenshot is in the images file
        name:name,
        surname:surname,
        age:age
    });
});

module.exports = router;