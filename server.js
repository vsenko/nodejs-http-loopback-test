'use strict';
var http = require("http");

(function run() {
  if(require.main === module) {
    start();
  }
})();

function start() {
  http.createServer(function (request, response) {
    request.setEncoding('utf8');

    request.addListener('data', function(postDataChunk) {
      // Send response to the client after the first data chunk
      request.removeAllListeners('data');
      request.removeAllListeners('end');
      response.writeHead(400, {'Content-Type': 'text/plain'});
      response.end('First chunk received.', function(){
        console.log(`server: "First chunk received." response sent to client`);
      });
    });

    request.addListener('end', function() {
      // This will never happen
      response.writeHead(200, {'Content-Type': 'text/plain'});
      return response.end('OK', function(){
        console.log(`server: "OK" response sent to client.`);
      });
    });

  }).listen(10345);
};

exports.start = start;
