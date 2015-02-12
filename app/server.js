var express = require('express'); 
var app = express(), 
    http = require('http'),
    routes = require('./routes'), 
    mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress()); 
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 

app.get('/', routes.index); 

app.listen(8080); 
