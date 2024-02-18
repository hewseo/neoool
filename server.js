const express = require('express');
const http = require('http');

app = express()
server = http.createServer(app);

app.get('/login.html', function (req, res) {
  res.send("로그인 화면에 도달했습니다")
});

server.listen(8000, function () {
  console.log('Express server listening on port ' + server.address().port);
});