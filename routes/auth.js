var express = require('express');
var router = express.Router();
var authController = require("../components/auth/auth.controller")


/* GET home page. */
router.post('/login',authController.login);

module.exports = router;
