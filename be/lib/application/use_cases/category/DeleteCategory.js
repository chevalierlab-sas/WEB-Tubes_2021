'use strict'


module.exports = (categoryId, { categoryRepository }) => {
    return categoryRepository.remove(categoryId);
};