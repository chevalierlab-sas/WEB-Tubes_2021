'use strict';

module.exports = class {

    persist(domainInventory) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(domainInventory) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove(inventoryId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(inventoryId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};