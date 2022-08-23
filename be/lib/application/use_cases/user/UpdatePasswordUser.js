'use strict'

const User = require("../../../domain/User")

module.exports = (id, password, { userRepository }) => {
    const user = new User(id, password);
    return userRepository.updatePassword(user);
};