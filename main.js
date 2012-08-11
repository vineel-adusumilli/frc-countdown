var http = require('http');

var app = http.createServer(onRequest);
app.listen(8080);

function onRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
}
