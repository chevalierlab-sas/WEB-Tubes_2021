'use strict'

module.exports = (categoryId, { categoryRepository }) => {
    return categoryRepository.get(categoryId)
};