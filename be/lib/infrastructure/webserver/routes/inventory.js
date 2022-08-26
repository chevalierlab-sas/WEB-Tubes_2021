'use strict'

const express = require('express')
const router = express.Router()
const InventoryController = require('../../../interfaces/controllers/InventoryController')
const CreateInventoryRequest = require('../../security/request/inventory/CreateInventoryRequest')
const UpdateInventoryRequest = require('../../security/request/inventory/UpdateInventoryRequest')
const TakeInventoryRequest = require('../../security/request/inventory/TakeInventoryRequest')

router.get('/', InventoryController.listInventories)
router.post('/', CreateInventoryRequest, InventoryController.createInventory)
router.get('/:inventoryId', InventoryController.GetInventory)
router.put('/:inventoryId', UpdateInventoryRequest, InventoryController.updateInventory)
router.delete('/:inventoryId', InventoryController.deleteInventory)
router.put('/:inventoryId/take', TakeInventoryRequest, InventoryController.takeInventory)

module.exports = router