var express = require('express');
var _ = require('lodash');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/check', function (req, res) {
  var a = 0, b = 0;
  if(!(_.isEmpty(req.query.a))){
    a = parseInt(req.query.a);
    if(!(_.isInteger(a))){
      a = 0;
    }
  }
  if(!(_.isEmpty(req.query.b))){
    b = parseInt(req.query.b);
    if(!(_.isInteger(b))){
      b = 0 ;
    }
  }
  var summ = a + b;
  var summStr = _.toString(summ);
  res.send(summStr);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
