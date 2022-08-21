const router = require('express').Router()
const express = require('express')
const auth = require('../../../application/use_cases/auth/VerifyAccessToken')
const app = express()

// router.use('/auth', require('./auth.routes'))
// router.use('/post', require('./post.routes'))
router.use('/category', auth, require('./category'))
router.use('/user', require('./user'))
router.use('/', require('./auth'))

module.exports = router