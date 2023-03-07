"use strict";

var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//Rutas
app.use(require('./routes/index'));
app.listen(3000);
console.log('Server on port 3000');