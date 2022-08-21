const {sequelize, DataTypes} = require('../sequilize')
module.exports = sequelize.define('categories', {
      // attributes
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: DataTypes.STRING(100),
          allowNull: false
      }
    }, {
      // options
    timestamps: false
});