'use strict'

const { Sequelize, DataTypes } = require('sequelize')
const environment = require('../../../config/environment');

const sequelize = new Sequelize(environment.database.url);

module.exports = {sequelize, DataTypes};