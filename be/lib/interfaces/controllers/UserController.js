'use strict';

const serviceLocator = require('../service-locator');
const responseHandler = require('../../infrastructure/helpers/ResponseHandler')
const CreateUser = require('../../application/use_cases/user/CreateUser');
const ListUsers = require('../../application/use_cases/user/ListUser');
const GetUser = require('../../application/use_cases/user/GetUser');
const UpdateUser = require('../../application/use_cases/user/UpdateUser');
const DeleteUser = require('../../application/use_cases/user/DeleteUser');
const UpdatePasswordUser = require('../../application/use_cases/user/UpdatePasswordUser');

module.exports = {

    async listUsers(req, res) {

        // Treatment
        const users = await ListUsers(serviceLocator);
        const data = users.map(serviceLocator.userSerializer.serialize)

        // Output
        return responseHandler.success(res, {
            message: "Success get all user",
            data: data
        })
    },

    async createUser(req, res) {

        // Input
        const { name, username, password } = req.body;

        // Treatment
        const user = await CreateUser(name, username, password, serviceLocator);
        const data = serviceLocator.userSerializer.serialize(user)

        return responseHandler.success(res, {
            code: 201,
            message: "Success create user",
            data: data
        })
    },

    async getUser(req, res) {

        // Input
        const userId = req.params.userId;

        // Treatment
        const user = await GetUser(userId, serviceLocator);

        // Output
        if (!user) return responseHandler.error404(res, {
            message: "user not found"
        })
        const data = serviceLocator.userSerializer.serialize(user)

        return responseHandler.success(res, {
            message: "Success get user",
            data: data
        })
    },

    async updateUser(req, res) {
        // input
        const userId = req.params.userId
        const { name, username } = req.body

        // Treatment
        const user = await UpdateUser(userId, name, username, serviceLocator);
        if (!user) return responseHandler.error404(res, {
            message: "user not found"
        })
        const data = serviceLocator.userSerializer.serialize(user)

        // Output
        return responseHandler.success(res, {
            message: "Success update user",
            data: data
        })
    },

    async updatePasswordUser(req, res) {
        // input
        const userId = req.params.userId
        const { password } = req.body

        // Treatment
        const user = await UpdatePasswordUser(userId, password, serviceLocator);
        if (!user) return responseHandler.error404(res, {
            message: "user not found"
        })
        const data = serviceLocator.userSerializer.serialize(user)

        // Output
        return responseHandler.success(res, {
            message: "Success update password user",
            data: data
        })
    },
    

    async deleteUser(req, res) {

        // Input
        const userId = req.params.userId;

        // Treatment
        const user = await DeleteUser(userId, serviceLocator);
        if (!user) return responseHandler.error404(res, {
            message: "user not found"
        })

        // Output
        return responseHandler.success(res, {
            message: "Success delete user"
        })
    },

};