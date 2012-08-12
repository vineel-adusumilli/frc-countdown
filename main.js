var http = require('http'),
    static = require('node-static');

var fileServer = new static.Server('./public');

http.createServer(function (request, response) {
  request.addListener('end', function() {
    fileServer.serve(request, response);
  });
}).listen(process.env.PORT || 5000);
