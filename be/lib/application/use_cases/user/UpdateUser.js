'use strict'

const User = require("../../../domain/User")

module.exports = (id, name, username, { userRepository }) => {
    const user = new User(id, name, username);
    return userRepository.merge(user);
};