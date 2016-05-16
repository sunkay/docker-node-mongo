var express = require('express');
var app = express();
var mongoose = require('mongoose');

//DB setup
//var mongourl = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://momgo:27017/';
//console.log("MongoURL: ", mongourl);
mongoose.connect("mongodb://mongo:27017");

app.get('/', function(req, res){
  res.send("Hello World-changed-1   ");
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
