var express = require('express');
var server = express();
var port = process.env.port || 2700;

server.use(express.static(__dirname + '/dist/'));
server.listen(port, '0.0.0.0');
console.log(`
 ______  _____         _____    _____  _____ 
 |_____]   |   |      |     |     |   |     |
 |_____] __|__ |_____ |_____| . __|__ |_____|
 
 `)
console.log('listening on port: ' + port);