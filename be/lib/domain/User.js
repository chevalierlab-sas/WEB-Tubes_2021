'use strict';

module.exports = class {

    constructor(id = null, name, username, password, role) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
    }
};