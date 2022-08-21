'use strict';

// const JwtAccessTokenManager = require('./security/JwtAccessTokenManager');
const CategorySerializer = require('./serializers/CategorySerializer');
const CategoryRepository = require('../infrastructure/repositories/CategoryRepository')

function buildBeans() {

    /*
    * Default implementations
    */
    const beans = {
        // userRepository: new UserRepositorySQLite(),
        // accessTokenManager: new JwtAccessTokenManager(),
        // userSerializer: new UserSerializer(),
        categoryRepository: new CategoryRepository(),
        categorySerializer: new CategorySerializer(),
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