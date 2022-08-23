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
