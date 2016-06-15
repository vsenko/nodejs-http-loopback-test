'use strict';

var http = require('http');

(function run(){
  if(require.main === module) {
    start();
  }
})();

function start() {
  var dataResp = '';

  var req = http.request({
    hostname: 'localhost',
    port: 10345,
    path: '/',
    method: 'POST',
  }, function(res) {
    res.on('data', function (chunk) {
      dataResp += chunk;
    });

    res.on("end", function() {
      console.log(`client: status code: ${res.statusCode}. data: ${dataResp}`);
    });

    res.on('error', function(e) {
      console.log(`client: problem with response: ${e}`);
    });
  });

  req.on('error', function(e) {
    console.log(`client: problem with request: ${e}`);
  });

  req.end(new Buffer(26 * 1024 * 1024));
}

exports.start = start;
