'use strict'

const Inventory = require("../../../domain/Inventory")

module.exports = (
    // id, category_id, deposit_name, deposit_student_id, 
    // deposit_admin, deposit_time, item_name, description,
    // status, take_name, take_student_id, take_time, take_admin,
    { categoryRepository }
) => {
    const inventory = new Inventory(
        // id, category_id, deposit_name, deposit_student_id, 
        // deposit_admin, deposit_time, item_name, description,
        // status, take_name, take_student_id, take_time, take_admin
    );
    return categoryRepository.merge(inventory);
};