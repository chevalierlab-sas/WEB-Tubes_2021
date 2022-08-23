'use strict'

module.exports = (inventoryId, { inventoryRepository }) => {
    return inventoryRepository.get(inventoryId)
};