const {sequelize, DataTypes} = require('../sequilize')
module.exports = sequelize.define('categories', {
    // attributes
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
      // options
    timestamps: false
});