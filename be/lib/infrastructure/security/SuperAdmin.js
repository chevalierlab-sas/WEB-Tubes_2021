'use strict';

const responseHandler = require('../../infrastructure/helpers/ResponseHandler')

module.exports = (req, res, next) => {
    const role_user = req.user.role

    if(!(role_user == 'super_admin')){
        return responseHandler.error(res, {
            code: 403,
            message: 'role only super admin',
        })
    }
    next()
}