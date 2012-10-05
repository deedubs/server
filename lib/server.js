
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express();

app.configure('development', function() {
  app.use(express.logger('dev'));
});

app.use(express.static(__dirname + '/../repos'));
app.use(require('./proxy'));