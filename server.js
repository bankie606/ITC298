var http = require("http"), url = require('url');

http.createServer(function(request, response) {
  //    console.log(req.url);
    var url_parts = url.parse(request.url, true);
    console.log(url_parts.query);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(process.env.PORT || 3000);