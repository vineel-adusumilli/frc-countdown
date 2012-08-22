var app = require('http').createServer(onRequest),
    static = require('node-static');

var fileServer = new static.Server('./public');

function onRequest(request, response) {
  request.addListener('end', function() {
    fileServer.serve(request, response);
  });
}

app.listen(process.env.PORT || 5000);

