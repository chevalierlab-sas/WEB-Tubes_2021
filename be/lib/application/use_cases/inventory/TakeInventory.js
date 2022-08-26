'use strict'

const Inventory = require("../../../domain/Inventory")
const StudentModel = require('../../../infrastructure/database/orm/sequilize/models/Student')
const dateTime = require('node-datetime')

module.exports = async (
    id, take_student_id, take_name, take_admin,
    { inventoryRepository }
) => {
    const status = 'take'
    const now  = dateTime.create()
    const take_time = now.format('Y-m-d H:M:S')
    take_name = take_student_id ? (await StudentModel.findByPk(take_student_id)).fullname : take_name
    const inventory = new Inventory(
        id, null, null, null, 
        null, null, null, null,
        status, take_name, take_student_id, take_time, take_admin
    );
    return inventoryRepository.take(inventory);
};