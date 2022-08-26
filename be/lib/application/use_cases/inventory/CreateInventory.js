'use strict'

const Inventory = require("../../../domain/Inventory")
const StudentModel = require('../../../infrastructure/database/orm/sequilize/models/Student')
const dateTime = require('node-datetime')

module.exports = async (
    category_id, deposit_name, deposit_student_id, item_name, description, deposit_admin,
    { inventoryRepository }
) => {
    const now  = dateTime.create()
    const deposit_time = now.format('Y-m-d H:M:S')
    const status = "deposit"
    deposit_name = deposit_student_id ? (await StudentModel.findByPk(deposit_student_id)).fullname : deposit_name

    const inventory = new Inventory(
        null, category_id, deposit_name, deposit_student_id, 
        deposit_admin, deposit_time, item_name, description,
        status, null, null, null, null
    );
    return inventoryRepository.persist(inventory);
};