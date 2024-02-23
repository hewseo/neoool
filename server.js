const express = require('express');
const http = require('http');
const PORT = 3000;

const app = express()
const server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendFile('index.html');
  console.log("기본페이지");
});

app.get('/login', function (req, res) {
  res.sendFile('login.html');
  console.log("로그인페이지");
});

server.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});