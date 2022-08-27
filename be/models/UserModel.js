import { Sequelize } from "@sequelize/core/types";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
 
                       //parameter
const Users = db.define('users', {  
    //field
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
}, {
    freezeTableName:true
});

export default Users;