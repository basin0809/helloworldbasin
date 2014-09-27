
var http = require("http");
var url = require("url");
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally
var headers = {};
headers["Access-Control-Allow-Origin"] = "*";
headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
headers["Access-Control-Allow-Credentials"] = false;
headers["Access-Control-Max-Age"] = '86400'; // 24 hours
headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";

http.createServer(function(request, response) {

	 response.writeHead(200, headers);
     var params = url.parse(request.url, true).query;
     var input = params.number;
     var numInput = new Number(input);
     var numOutput = new Number(Math.random() * numInput).toFixed(0)   
     response.write(numOutput);
     response.end();
}).listen(port, address);
console.log('generating random number...');