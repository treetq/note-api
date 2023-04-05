const dotenv = require("dotenv");

dotenv.config();
// console.log("DB_HOST:", process.env.DB_HOST);

const db = require("./db");

db.connect();
