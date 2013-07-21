/*
* @Author: Bruno Faria
* Descript: Homework3 Part1 - Coursera Startup Engineering @ 2013
* 			Sample Heroku Application	
*/

var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

var index = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(index.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});