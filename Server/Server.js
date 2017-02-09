var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.get('/',function(request, response){ 
    response.end('Hello World！');
});

function echoFunc(request,response){
	response.end(request.url);
}

app.get('/echo/*',echoFunc);
server.listen(8080,'127.0.0.1',function(){
    console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
});