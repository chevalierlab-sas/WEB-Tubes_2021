'use strict';

const User = require('../../../domain/User');

module.exports = (name, username, password, { userRepository }) => {
    const user = new User(null, name, username, password);
    return userRepository.persist(user);
};