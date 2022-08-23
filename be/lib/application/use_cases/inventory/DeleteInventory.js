'use strict'


module.exports = (inventoryId, { inventoryRepository }) => {
    return inventoryRepository.remove(inventoryId);
};