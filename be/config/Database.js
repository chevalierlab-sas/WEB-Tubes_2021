import { Sequelize } from "@sequelize/core";

const db = new Sequelize('auth_db','root','', {
    host: "localhost",
    dialect: "mysql"
});

export default db;