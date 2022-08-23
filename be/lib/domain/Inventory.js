'use strict';

module.exports = class {
    constructor(
        id = null, 
        category_id, 
        deposit_name, 
        deposit_student_id, 
        deposit_admin, 
        deposit_time, 
        item_name, 
        description, 
        status, 
        take_name, 
        take_student_id, 
        take_time, 
        take_admin,
    ) {
        this.id = id;
        this.category_id = category_id;
        this.deposit_name = deposit_name;
        this.deposit_student_id = deposit_student_id;
        this.deposit_admin = deposit_admin;
        this.deposit_time = deposit_time;
        this.item_name = item_name;
        this.description = description;
        this.status = status;
        this.take_name = take_name;
        this.take_student_id = take_student_id;
        this.take_time = take_time;
        this.take_admin = take_admin;
    }
};