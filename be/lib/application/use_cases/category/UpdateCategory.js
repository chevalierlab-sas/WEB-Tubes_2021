'use strict'

const Category = require("../../../domain/Category")

module.exports = (id, name, { categoryRepository }) => {
    const category = new Category(id, name);
    return categoryRepository.merge(category);
};