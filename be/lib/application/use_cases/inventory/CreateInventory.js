'use strict'

const Inventory = require("../../../domain/Inventory")

module.exports = (
    category_id, deposit_name, deposit_student_id, 
    deposit_admin, deposit_time, item_name, description,
    status, take_name, take_student_id, take_time, take_admin,
    { inventoryRepository }
) => {
    const inventory = new Inventory(
        null, category_id, deposit_name, deposit_student_id, 
        deposit_admin, deposit_time, item_name, description,
        status, take_name, take_student_id, take_time, take_admin
    );
    return inventoryRepository.persist(inventory);
};