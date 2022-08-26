'use strict'

const Inventory = require("../../../domain/Inventory")
const StudentModel = require('../../../infrastructure/database/orm/sequilize/models/Student')
const dateTime = require('node-datetime')

module.exports = async (
    id, category_id, deposit_name, deposit_student_id, 
    deposit_time, item_name, description,
    status, take_name, take_student_id, take_time,
    { inventoryRepository }
) => {
    deposit_name = deposit_student_id ? (await StudentModel.findByPk(deposit_student_id)).fullname : deposit_name
    take_name = take_student_id ? (await StudentModel.findByPk(take_student_id)).fullname : take_name
    deposit_time = deposit_time ? dateTime.create(deposit_time, 'Y-m-d H:M:S')._now : 'asd'
    take_time = take_time ? dateTime.create(take_time, 'Y-m-d H:M:S')._now : null
    const inventory = new Inventory(
        id, category_id, deposit_name, deposit_student_id, 
        null, deposit_time, item_name, description,
        status, take_name, take_student_id, take_time, null
    );
    return inventoryRepository.merge(inventory);
};