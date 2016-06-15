var server = require('./server.js');
var client = require('./client.js');

server.start();
setTimeout(() => {
  client.start();
},
100);
