var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8080;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
  console.log('Boom! CONNECTED at ' + HOST  +  PORT);
  // write to server
  client.write('Mmmm... Hello, server! Your Lover, Client.');
});

//add a data event handler for the client socket
//data is what the server sent to this socket

client.on('data', function(data) {
  console.log('Received: ' + data);
  client.destroy(); // kill client after server's response
});

//add a close event handler for the client socket
client.on('close', function() {
  console.log('Connection closed');
});