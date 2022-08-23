'use strict'

const express = require('express')
const router = express.Router()
const CategoryController = require('../../../interfaces/controllers/CategoryController')
const CreateCategoryRequest = require('../../security/request/category/CreateCategoryRequest')
const UpdateCategoryRequest = require('../../security/request/category/UpdateCategoryRequest')

router.get('/', CategoryController.listCategories)
router.post('/', CreateCategoryRequest, CategoryController.createCategory)
router.get('/:categoryId', CategoryController.getCategory)
router.put('/:categoryId', UpdateCategoryRequest, CategoryController.updateCategory)
router.delete('/:categoryId', CategoryController.deleteCategory)

module.exports = router