'use strict';
var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

var settings = {
    root: rootPath,
    webAppClientPath: '/client/web-app',
    port: process.env.PORT || 3000
};

module.exports = settings;