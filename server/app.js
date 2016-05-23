var express = require('express'),
    morgan = require('morgan');


var port = number = process.env.PORT || 3000;
var app = express();

var renderIndex = function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
};

app.get('/*', renderIndex);

app.listen(port, function () {
    console.log('app listening for request on port ', port)
});