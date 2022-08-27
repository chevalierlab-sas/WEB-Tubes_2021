const { sequelize, DataTypes } = require("../config/db");

module.exports = sequelize.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    produk_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "produk",
        key: "id",
      },
    },
    body:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    ukuran: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kondisi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        type: "FULLTEXT",
        name: "text_idx",
        fields: ["body"],
      },
    ],
  }
);
