var express = require('express');
var server = express();
var path = require('path');

server.use(express.static(__dirname + '/public'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));

  server.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/index.html'));
  });

  server.listen(8080, function(){
    console.log('Listening on port 8080');
  });