'use strict'

const express = require('express')
const router = express.Router()
const CategoryController = require('../../../interfaces/controllers/CategoryController')
const CreateCategoryResponse = require('../../security/request/category/CreateCategoryRequest')
const UpdateCategoryResponse = require('../../security/request/category/UpdateCategoryRequest')

router.get('/', CategoryController.listCategories)
router.post('/', CreateCategoryResponse, CategoryController.createCategory)
router.get('/:categoryId', CategoryController.getCategory)
router.put('/:categoryId', UpdateCategoryResponse, CategoryController.updateCategory)
router.delete('/:categoryId', CategoryController.deleteCategory)

module.exports = router