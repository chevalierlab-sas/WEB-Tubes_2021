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
  harga: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lokasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_person: {
    type: DataTypes.CHAR,
    unique: true,
    allowNull: false,
    validate: {
        len: 13,
    }
  }
},
{
    tableName: "produk",
    timestamps: true,
});
