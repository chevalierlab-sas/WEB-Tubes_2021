'use strict';

const serviceLocator = require('../service-locator');
const responseHandler = require('../../infrastructure/helpers/ResponseHandler')
const CreateUser = require('../../application/use_cases/user/CreateUser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    async createUser(req, res) {

        // Input
        const { name, username, password } = req.body;

        // Treatment
        const passwordBcrypt = await bcrypt.hash(password, bcrypt.genSaltSync())
        const user = await CreateUser(name, username, passwordBcrypt, serviceLocator);

        return responseHandler.success(res, {
            code: 201,
            message: "Success create user",
            data: serviceLocator.userSerializer.serialize(user)
        })
    },

    // async findUsers() {

    //     // Treatment
    //     const users = await ListUsers(serviceLocator);

    //     // Output
    //     return users.map(serviceLocator.userSerializer.serialize)
    // },

    // async getUser(request) {

    //     // Input
    //     const userId = request.params.id;

    //     // Treatment
    //     const user = await GetUser(userId, serviceLocator);

    //     // Output
    //     if (!user) {
    //     return Boom.notFound();
    //     }
    //     return serviceLocator.userSerializer.serialize(user);
    // },

    // async deleteUser(request, h) {

    //     // Input
    //     const userId = request.params.id;

    //     // Treatment
    //     await DeleteUser(userId, serviceLocator);

    //     // Output
    //     return h.response().code(204);
    // },

};