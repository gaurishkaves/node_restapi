const express = require('express')
const router = express.Router()
const authController = require('../components/auth/auth.controller')

/* GET home page. */
router.post('/login', authController.login)

module.exports = router
