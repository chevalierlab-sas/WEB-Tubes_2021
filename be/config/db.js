const { Sequelize, DataTypes } = require("@sequelize/core");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_ENGINE,
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Is connect to Database");
    sequelize
      .sync()
      .then(() => console.log("table is sync"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log("Not Connect to Database");
  }
};

module.exports = { sequelize, connection, DataTypes };
