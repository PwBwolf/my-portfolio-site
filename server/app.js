var express = require('express'),
    morgan = require('morgan'),
    settings = require('./config/settings');

var port = settings.port;
var app = express();

app.all('/*', function(req, res) {
    res.sendFile(settings.root + settings.webAppClientPath + '/index.html');
});

app.listen(port, function () {
    console.log('app listening for request on port ', port)
});

