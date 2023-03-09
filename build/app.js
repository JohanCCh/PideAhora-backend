"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var _invoices = _interopRequireDefault(require("./routes/invoices.routes"));
var _deliveries = _interopRequireDefault(require("./routes/deliveries.routes"));
var _categories = _interopRequireDefault(require("./routes/categories.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());

//información de la app
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});

//Rutas
app.use('/auth', _auth["default"]);
app.use('/products', _products["default"]);
app.use('/users', _users["default"]);
app.use('/invoices', _invoices["default"]);
app.use('/deliveries', _deliveries["default"]);
app.use('/categories', _categories["default"]);
var _default = app;
exports["default"] = _default;