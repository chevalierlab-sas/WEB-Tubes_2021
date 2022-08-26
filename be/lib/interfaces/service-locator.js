'use strict';

const JwtAccessTokenManager = require('../infrastructure/security/JwtAccessTokenManager');
const CategorySerializer = require('./serializers/CategorySerializer');
const CategoryRepository = require('../infrastructure/repositories/CategoryRepository')
const UserSerializer = require('./serializers/UserSerializer');
const UserRepository = require('../infrastructure/repositories/UserRepository')
const StudentSerializer = require('./serializers/StudentSerializer');
const StudentRepository = require('../infrastructure/repositories/StudentRepository')
const InventorySerializer = require('./serializers/InventorySerializer');
const InventoryRepository = require('../infrastructure/repositories/InventoryRepository')

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
        studentSerializer: new StudentSerializer(),
        studentRepository: new StudentRepository(),
        inventorySerializer: new InventorySerializer(),
        inventoryRepository: new InventoryRepository(),
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