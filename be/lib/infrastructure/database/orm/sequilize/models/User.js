const {sequelize, DataTypes} = require('../sequilize')
module.exports = sequelize.define('users', {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(240),
            allowNull: false
        }
    }, {
      // options
    timestamps: false
});