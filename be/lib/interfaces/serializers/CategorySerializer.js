'use strict';

const _serializeSingleCategory = (category) => {
    return {
        'id': category.id,
        'name': category.name,
    };
};

module.exports = class {

    serialize(data) {
        if (!data) {
        throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
        return data.map(_serializeSingleCategory);
        }
        return _serializeSingleCategory(data);
    }

};