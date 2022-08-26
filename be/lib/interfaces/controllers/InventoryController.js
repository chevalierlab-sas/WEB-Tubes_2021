'use strict'

const serviceLocator = require('../service-locator')
const responseHandler = require('../../infrastructure/helpers/ResponseHandler')
const ListInventory = require('../../application/use_cases/inventory/ListInventory');
const CreateInventory = require('../../application/use_cases/inventory/CreateInventory');
const GetInventory = require('../../application/use_cases/inventory/GetInventory');
const UpdateInventory = require('../../application/use_cases/inventory/UpdateInventory');
const DeleteInventory = require('../../application/use_cases/inventory/DeleteInventory');
const TakeInventory = require('../../application/use_cases/inventory/TakeInventory');

module.exports = {

    async listInventories(req, res) {

        // Treatment
        const inventories = await ListInventory(serviceLocator);
        const data = inventories.map(serviceLocator.inventorySerializer.serialize)

        // Output
        return responseHandler.success(res, {
            message: "Success get all inventory",
            data: data
        })
    },

    async createInventory(req, res) {
        // input
        const deposit_admin = req.user.id
        const { category_id, deposit_student_id, deposit_name, item_name, description } = req.body
        // Treatment
        const inventory = await CreateInventory(
            category_id, deposit_name, deposit_student_id, item_name, description,deposit_admin,
            serviceLocator
        );
        const data = serviceLocator.inventorySerializer.serialize(inventory)

        // Output
        return responseHandler.success(res, {
            code: 201,
            message: "Success create inventory",
            data: data
        })
    },

    async updateInventory(req, res) {
        // input
        const inventoryId = req.params.inventoryId
        const { 
            category_id, deposit_student_id, deposit_name, 
            deposit_time, item_name, description, 
            status, take_student_id, take_name, take_time 
        } = req.body

        // Treatment
        const inventory = await UpdateInventory(
            inventoryId, category_id, deposit_name, deposit_student_id,
            deposit_time, item_name, description, 
            status, take_name, take_student_id, take_time,
            serviceLocator
        );
        if (!inventory) return responseHandler.error404(res, {
            message: "inventory not found"
        })
        const data = serviceLocator.inventorySerializer.serialize(inventory)

        // Output
        return responseHandler.success(res, {
            message: "Success update inventory",
            data: data
        })
    },

    async GetInventory(req, res) {
        // input
        const inventoryId = req.params.inventoryId

        // Treatment
        const inventory = await GetInventory(inventoryId, serviceLocator);
        if (!inventory) return responseHandler.error404(res, {
            message: "inventory not found"
        })
        const data = serviceLocator.inventorySerializer.serialize(inventory)

        // Output
        return responseHandler.success(res, {
            message: "Success get inventory",
            data: data
        })
    },

    async deleteInventory(req, res) {
        // input
        const inventoryId = req.params.inventoryId

        // Treatment
        const inventory = await DeleteInventory(inventoryId, serviceLocator);
        if (!inventory) return responseHandler.error404(res, {
            message: "inventory not found"
        })

        // Output
        return responseHandler.success(res, {
            message: "Success delete inventory"
        })
    },

    async takeInventory(req, res) {
        // input
        const take_admin = req.user.id
        const inventoryId = req.params.inventoryId
        const { 
            take_student_id, take_name
        } = req.body

        // Treatment
        const inventory = await TakeInventory(
            inventoryId, take_student_id, take_name, take_admin,
            serviceLocator
        );
        if (!inventory) return responseHandler.error404(res, {
            message: "inventory not found"
        })
        const data = serviceLocator.inventorySerializer.serialize(inventory)

        // Output
        return responseHandler.success(res, {
            message: "Success take inventory",
            data: data
        })
    },
}