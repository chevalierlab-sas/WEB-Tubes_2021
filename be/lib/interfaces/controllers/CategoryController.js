'use strict'

const serviceLocator = require('../service-locator')
const ListCategory = require('../../application/use_cases/category/ListCategory');
const CreateCategory = require('../../application/use_cases/category/CreateCategory');
const GetCategory = require('../../application/use_cases/category/GetCategory');
const UpdateCategory = require('../../application/use_cases/category/UpdateCategory');
const DeleteCategory = require('../../application/use_cases/category/DeleteCategory');
const responseHandler = require('../../infrastructure/helpers/ResponseHandler')

module.exports = {

    async listCategories(req, res) {

        // Treatment
        const categories = await ListCategory(serviceLocator);
        const data = categories.map(serviceLocator.categorySerializer.serialize)

        // Output
        return responseHandler.success(res, {
            message: "Success get all category",
            data: data
        })
    },

    async createCategory(req, res) {
        // input
        const { name } = req.body

        // Treatment
        const category = await CreateCategory(name, serviceLocator);

        // Output
        return responseHandler.success(res, {
            code: 201,
            message: "Success create category",
            data: category
        })
    },

    async getCategory(req, res) {
        // input
        const categoryId = req.params.categoryId

        // Treatment
        const category = await GetCategory(categoryId, serviceLocator);
        if (!category) return responseHandler.error404(res, {
            message: "category not found"
        })

        // Output
        return responseHandler.success(res, {
            message: "Success get category",
            data: category
        })
    },

    async updateCategory(req, res) {
        // input
        const categoryId = req.params.categoryId
        const { name } = req.body

        // Treatment
        const category = await UpdateCategory(categoryId, name, serviceLocator);
        if (!category) return responseHandler.error404(res, {
            message: "category not found"
        })

        // Output
        return responseHandler.success(res, {
            message: "Success update category",
            data: category
        })
    },

    async deleteCategory(req, res) {
        // input
        const categoryId = req.params.categoryId

        // Treatment
        const category = await DeleteCategory(categoryId, serviceLocator);
        if (!category) return responseHandler.error404(res, {
            message: "category not found"
        })

        // Output
        return responseHandler.success(res, {
            message: "Success delete category"
        })
    },
}