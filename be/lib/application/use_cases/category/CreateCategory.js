'use strict'

const Category = require("../../../domain/Category")

module.exports = (name, { categoryRepository }) => {
    const category = new Category(null, name);
    return categoryRepository.persist(category);
};