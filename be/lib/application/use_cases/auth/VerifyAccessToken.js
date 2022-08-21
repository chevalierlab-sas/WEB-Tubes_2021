'use strict';

const responseHandler = require('../../../infrastructure/helpers/ResponseHandler')
const serviceLocator = require('../../../interfaces/service-locator');

module.exports = (req, res, next) => {

    // Input
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return responseHandler.error(res, {
            code: 401,
            message: "Missing or wrong Authorization"
        })
    }
    const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

    // Treatment
    try {
        const decoded = serviceLocator.accessTokenManager.decode(accessToken);
        if (!decoded) {
            throw new Error('Invalid access token');
        }

        const user = decoded.user

        // Output
        req.user = user
        console.log(user);
        next()

    } catch (err) {
        return responseHandler.error(res, {
            code: 401,
            message: "Missing or wrong Authorization"
        })
    }
}