const express = require('express');
const http = require('http');
const PORT = 8000;

app = express()
server = http.createServer(app);

app.get('/', function(req, res) {
 // res.sendFile('index.html');
    res.send("기본페이지");
});

app.get('/login', function (req, res) {
 // res.sendFile('login.html');
    res.send("로그인페이지");
});

server.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});