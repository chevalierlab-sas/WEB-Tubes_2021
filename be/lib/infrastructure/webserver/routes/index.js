const router = require('express').Router()
const auth = require('../../../application/use_cases/auth/VerifyAccessToken')
const AdminOrSuperAdmin = require('../../security/AdminOrSuperAdmin')
const SuperAdmin = require('../../security/SuperAdmin')

router.use('/inventory', auth, AdminOrSuperAdmin, require('./inventory'))
router.use('/category', auth, AdminOrSuperAdmin, require('./category'))
router.use('/student', auth, AdminOrSuperAdmin, require('./student'))
router.use('/user', require('./user'))
router.use('/', require('./auth'))

module.exports = router