'use strict'

const express = require('express')
const router = express.Router()
const AuthController = require('../../../interfaces/controllers/AuthorizationController')

router.post('/login', AuthController.getAccessToken)

module.exports = router