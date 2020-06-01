var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("hello world");
}

http.createServer(onRequest).listen(8000);

