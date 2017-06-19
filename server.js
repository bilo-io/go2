var express = require('express'),
      httpProxy = require('http-proxy'),
      request = require('request'),
      url = require("url"),
      server = express(),
      port = process.env.port || 2700,
      proxy = httpProxy.createProxyServer({ secure: false, forward: "https://platform.whereismytransport.com" }),
      token,
      tapi = {
            platformApiUrl: 'https://platform.whereismytransport.com/api',
            identityStsUrl: 'https://identity.whereismytransport.com/connect/token',
            clientId: 'e178dbdd-57e3-4735-8825-b432a9377618',
            clientSecret: 'hbDfw04ds+yfdPWiERFg+E1kH9ifmu/+92/lHNMJ4Co='
      }

function getToken(callback) {
      request.post("https://identity.whereismytransport.com/connect/token",
            {
                  form: {
                        client_id: tapi.clientId,
                        client_secret: tapi.clientSecret,
                        grant_type: "client_credentials",
                        scope: "transportapi:all"
                  }
            },
            function (error, response, body) {
                  if (error == null && response.statusCode == 200) {
                        token = "Bearer " + JSON.parse(body).access_token;
                        callback();
                  }
            }
      );
};

function proxyRequest(e) {
      var parsedUrl = url.parse(e.req.url, true);
      e.req.headers["authorization"] = token;
      proxy.web(e.req, e.res, { target: "https://platform.whereismytransport.com", changeOrigin: true }, function (error) {
            console.log("error" + error);
      });
}
/**
 * gets the token every hour
 */
setInterval(function () {
      getToken();
}, 1000 * 3600);
/**
 * NB: checks all requests that have /api in them
 * it tries to proxy ALL requests that have /api in them.
 * So if you have anything with /api and it does not 
 * interact with transportapi.. it might not work.
 * 
 * All requests that it does not filter on get forwarded on in the pipeline
 */
server.use(function (req, res, next) {
      console.log("request: ", req.url);
      if (req.url.indexOf("/api") !== -1) {
            console.log("proxying request");
            proxyRequest({ res, req })
      } else {
            next();
      }
});

server.use(express.static(__dirname + '/dist/'));

getToken(() => {
      server.listen(port, '0.0.0.0', server => {
            console.log('listening on port: ' + port);
      });
})
