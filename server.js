const express = require('express');
const http = require('http');
const PORT = 3000;

app = express()
server = http.createServer(app);

app.get('/', function(req, res){
  console.log("서버와 연결됨");
});

app.get('/login', function (req, res) {
  res.sendFile('login.html');
});

server.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});