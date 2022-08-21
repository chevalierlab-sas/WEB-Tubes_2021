'use strict'

const express = require('express')
const router = express.Router()
const CategoryController = require('../../../interfaces/controllers/CategoryController')

router.get('/', CategoryController.listCategories)
router.post('/', CategoryController.createCategory)
router.get('/:categoryId', CategoryController.getCategory)
router.put('/:categoryId', CategoryController.updateCategory)
router.delete('/:categoryId', CategoryController.deleteCategory)

module.exports = router