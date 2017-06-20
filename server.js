var express = require('express'),
      fallback = require('express-history-api-fallback'),
      request = require('request'),
      server = express(),
      port = process.env.port || 2700;

server.use(express.static(__dirname + '/dist/'));
server.use(fallback('dist/index.html', { root: __dirname }));
server.listen(port, '0.0.0.0', server => {
      console.log('listening on port: ' + port);
});

