const router = require('express').Router()
const express = require('express')
const app = express()

// router.use('/auth', require('./auth.routes'))
// router.use('/post', require('./post.routes'))
router.use('/category', require('./category'))

module.exports = router