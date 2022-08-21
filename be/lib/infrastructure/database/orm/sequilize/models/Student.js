const {sequelize, DataTypes} = require('../sequilize')
module.exports = sequelize.define('students', {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING(225),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(225),
            allowNull: false,
            unique: true,
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
      // options
    timestamps: false
});