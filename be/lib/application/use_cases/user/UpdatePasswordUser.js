'use strict'

const bcrypt = require('bcrypt')
const User = require("../../../domain/User")

module.exports = async (id, password, { userRepository }) => {
    const passwordBcrypt = await bcrypt.hash(password, bcrypt.genSaltSync())
    const user = new User(id, passwordBcrypt);
    return userRepository.updatePassword(user);
};