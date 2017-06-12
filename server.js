var express = require('express');
var path = require('path');
var fallback = require('express-history-api-fallback');
var server = express();
var port = process.env.port || 2010;

// https://stackoverflow.com/questions/28553904/client-routing-using-react-router-and-server-side-routing
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/'));
});

server.use(fallback('index.html', {root:__dirname + '/dist/'}));
server.use(express.static(__dirname + '/dist/'));
server.listen(port, '0.0.0.0');

console.log(`go-2:server.js listening on port:${port}`);