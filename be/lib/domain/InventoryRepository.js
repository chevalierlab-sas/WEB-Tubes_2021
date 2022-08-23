'use strict';

module.exports = class {

    persist(domainCategory) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(domainCategory) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove(categoryId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(categoryId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};