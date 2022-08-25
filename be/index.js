import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import db from "./config/Database.js";
import router from "./routes/index.js";
// import Users from "./models/UserModel.js"; // import model from function Users in userModel.js
dotenv.config();
const app = express();

try{    
    await db.authenticate();
    console.log("Database connected...");
    // await Users.sync(); // create table with sequelize
} catch(error){
    console.error(error);
}

app.use(cors({ credential:true, origin:'http://localhost:3000'})); //allow access on this domain
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, ()=> console.log('Server running at port 3000'));