'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../../../interfaces/controllers/UserController')
const CreateUserRequest = require('../../security/request/user/CreateUserRequest')
const UpdateUserRequest = require('../../security/request/user/UpdateUserRequest')
const UpdatePasswordUserRequest = require('../../security/request/user/UpdatePasswordUserRequest')

router.get('/', UserController.listUsers)
router.post('/', CreateUserRequest, UserController.createUser)
router.get('/:userId', UserController.getUser)
router.put('/:userId', UpdateUserRequest, UserController.updateUser)
router.delete('/:userId', UserController.deleteUser)
router.put('/:userId/password', UpdatePasswordUserRequest, UserController.updatePasswordUser)

module.exports = router