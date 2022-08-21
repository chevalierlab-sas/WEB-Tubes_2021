'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../../../interfaces/controllers/UserController')

router.post('/', UserController.createUser)

module.exports = router