'use strict';

var fs = require('fs');
var path = require('path');

module.exports = JSON.parse(String(fs.readFileSync(path.join(__dirname, 'eslint-config.json'))));
