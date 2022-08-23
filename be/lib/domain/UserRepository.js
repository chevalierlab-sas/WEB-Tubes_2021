'use strict';

module.exports = class {

    persist(userEntity) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(userEntity) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    updatePassword(userEntity) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByUsername(username) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

};