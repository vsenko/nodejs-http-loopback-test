# nodejs-http-loopback-test
Loopback test for nodejs HTTP

This test illustrates the difference in HTTP behaviour in Linux and Windows.

In Linux the output of `nodejs index.js` is:
```
server: "First chunk received." response sent to client
client: status code: 400. data: First chunk received.
client: problem with request: Error: write ECONNRESET
```
Whereas in Windows the output is:
```
server: "First chunk received." response sent to client
client: problem with request: Error: read ECONNRESET
```
As you can see, client does not receive the response from the server.
