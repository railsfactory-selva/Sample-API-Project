var http = require('http');
require('marko/node-require').install();
var express = require('express');
var app = express();
app.use(express.static(__dirname));
var index_loader = require('./myproject/javascripts/index.js');

app.listen(3030, function () {
    console.log('JSNODE Node app started listening on port 3030');
});

app.get('/index.html', index_loader)
app.get('/', function(req,res){
	res.send('Hello World')
})
