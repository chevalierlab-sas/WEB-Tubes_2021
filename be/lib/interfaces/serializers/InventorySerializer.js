'use strict';

const _serializeSingleInventory = (inventory) => {
    return {
        id: inventory.id,
        category_id: inventory.category_id,
        deposit_name: inventory.deposit_name,
        deposit_student_id: inventory.deposit_student_id,
        deposit_admin: inventory.deposit_admin,
        deposit_time: inventory.deposit_time,
        item_name: inventory.item_name,
        description: inventory.description,
        status: inventory.status,
        take_name: inventory.take_name,
        take_student_id: inventory.take_student_id,
        take_time: inventory.take_time,
        take_admin: inventory.take_admin
    };
};

module.exports = class {

    serialize(data) {
        if (!data) {
        throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
        return data.map(_serializeSingleInventory);
        }
        return _serializeSingleInventory(data);
    }

};