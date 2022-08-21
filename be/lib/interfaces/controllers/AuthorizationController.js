'use strict';

const serviceLocator = require('../service-locator');
const GetAccessToken = require('../../application/use_cases/auth/GetAccessToken');
const VerifyAccessToken = require('../../application/use_cases/auth/VerifyAccessToken');
const responseHandler = require('../../infrastructure/helpers/ResponseHandler')

module.exports = {

    async getAccessToken(req, res) {

        // Input
        const {username, password} = req.body;

        // Treatment
        try {
        const accessToken = await GetAccessToken(username, password, serviceLocator);

        // Output
        // return accessToken;
        return responseHandler.success(res, {
            code: 200,
            message: "Success login",
            data: {
                token: accessToken
            }
        })
        } catch (err) {
        // return Boom.unauthorized('Bad credentials');
            return responseHandler.error(res, {
                code: 401,
                message: err.message 
            })
        }
    },
};