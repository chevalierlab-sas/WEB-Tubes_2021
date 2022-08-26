const {sequelize, DataTypes} = require('../sequilize')
const dateTime = require('node-datetime')

module.exports = sequelize.define('inventories', {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deposit_name: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        deposit_student_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deposit_name: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        deposit_admin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deposit_time: {
            type: DataTypes.DATE,
            allowNull: false,
            get: function() {
                let value = dateTime.create(this.getDataValue('deposit_time')).format('Y-m-d H:M:S')
                return value
            }
        },
        item_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('deposit', 'take'),
            allowNull: false,
            defaultValue: "deposit"
        },
        take_name: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        take_student_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        take_time: {
            type: DataTypes.DATE,
            allowNull: true,
            get: function() {
                let value = dateTime.create(this.getDataValue('take_time')).format('Y-m-d H:M:S')
                return value
            }
        },
        take_admin: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
      // options
    timestamps: false
});