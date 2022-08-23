'use strict';

module.exports = class {
    constructor(id = null, fullname, email, phone_number, address) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
    }
};