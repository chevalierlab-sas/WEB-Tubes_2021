'use strict';

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = async (username, password, { userRepository, accessTokenManager }) => {
    let user = await userRepository.getByUsername(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new Error('Bad credentials');
    }

    delete user.password
    return accessTokenManager.generate({user});
};