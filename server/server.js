// Dependencies
var express = require('express');
var path = require('path');

// Server
var server = express();
var port = process.env.PORT || 8000;
server.listen(port, function() {
  console.log("Time to make a calendar!" + '\n' + server.path());
})

// Static Files
server.use(express.static(path.resolve(__dirname + '/../client/')));

server.use(function(req, res, next) {
  console.log('time:', Date.now());
  next();
});

server.get('/', function(req, res) {
  console.log('sending static files...');
  res.sendFile('index.html', { root: path.join(__dirname + '/../client/pages/')});
});
