const express = require('express');

const route = express.Router();

const adminCtl = require('../controllers/adminController');

route.get("/",adminCtl.dashboard);
route.get("/form",adminCtl.form);


module.exports = route;