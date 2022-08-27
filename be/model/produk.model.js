const { sequelize, DataTypes } = require("../config/db");

module.exports = sequelize.define("produk", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  contact_person: {
    type: DataTypes.CHAR,
    unique: true,
    allowNull: false,
    validate: {
        len: 13,
    }
  },
  gambar: {
    type: DataTypes.BLOB,
    allowNull: false,
  }
},
{
    tableName: "produk",
    timestamps: true,
});
