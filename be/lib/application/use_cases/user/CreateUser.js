'use strict';

const bcrypt = require('bcrypt')
const User = require('../../../domain/User');

module.exports = async function (name, username, password, { userRepository }) {
    const passwordBcrypt = await bcrypt.hash(password, bcrypt.genSaltSync())
    const user = new User(null, name, username, passwordBcrypt);
    return userRepository.persist(user);
};