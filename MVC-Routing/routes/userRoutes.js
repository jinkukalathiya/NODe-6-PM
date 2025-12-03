const express = require('express');

const router = express.Router();

router.use(express.urlencoded());

const userCtl = require('../controllers/userController');

router.get('/', userCtl.homePage);

module.exports = router;