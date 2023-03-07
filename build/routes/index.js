"use strict";

var _require = require('express'),
  Router = _require.Router;
var router = Router();
var _require2 = require('../controllers/index.controllers'),
  getUsers = _require2.getUsers,
  getUserById = _require2.getUserById,
  createUser = _require2.createUser,
  updateUser = _require2.updateUser,
  deleteUser = _require2.deleteUser;
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router["delete"]('/users/:id', deleteUser);
module.exports = router;