'use strict';

const { validationResult } = require('express-validator');

const responseHandler = require('../../infrastructure/helpers/ResponseHandler')

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return responseHandler.error(res, {
            code: 400,
            message: 'bad request',
            errors: errors.array()
        })
    }
    next()
}