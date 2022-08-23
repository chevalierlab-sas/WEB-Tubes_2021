const router = require('express').Router()
const auth = require('../../../application/use_cases/auth/VerifyAccessToken')

router.use('/category', auth, require('./category'))
router.use('/student', auth, require('./student'))
router.use('/user', require('./user'))
router.use('/', require('./auth'))

module.exports = router