'use strict';

const JwtAccessTokenManager = require('../infrastructure/security/JwtAccessTokenManager');
const CategorySerializer = require('./serializers/CategorySerializer');
const CategoryRepository = require('../infrastructure/repositories/CategoryRepository')
const UserSerializer = require('./serializers/UserSerializer');
const UserRepository = require('../infrastructure/repositories/UserRepository')

function buildBeans() {

    /*
    * Default implementations
    */
    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
        categoryRepository: new CategoryRepository(),
        categorySerializer: new CategorySerializer(),
        userSerializer: new UserSerializer(),
        userRepository: new UserRepository(),
    };

    /*
    * Environment specific implementations
    */
    if (process.env.NODE_ENV === 'test') {
        // beans.userRepository = new UserRepositoryInMemory();
    }

    return beans;
}

module.exports = buildBeans();