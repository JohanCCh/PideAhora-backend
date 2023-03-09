"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeDB = exports.client = void 0;
var _pg = require("pg");
var _config = require("./config");
//conexión a la base de datos
var client = new _pg.Client({
  host: _config.URL_DB,
  user: 'postgres',
  //usuario de pgAdmin
  password: 'Admin',
  //contraseña
  database: 'pideAhora',
  port: '5432'
});

//prueba de conexión
exports.client = client;
client.connect().then(function (db) {
  console.log('DB is connected');
})["catch"](function (err) {
  console.log(err);
});

//cerrar conexión
var closeDB = function closeDB() {
  client.end();
};
exports.closeDB = closeDB;