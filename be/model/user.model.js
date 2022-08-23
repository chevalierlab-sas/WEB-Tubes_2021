const { sequelize, DataTypes } = require("../config/db");

module.exports = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 15]
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lokasi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_telp: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true,
        validate: {
            len: 13,
        }
    }
},
{
    tableName: 'user',
})