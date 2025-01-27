//   ----------- Using MYSQL2 ---------------
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "products",
// });

// module.exports = pool.promise();

// ------------- Using squelize ------------

const Sequelize = require("sequelize");

const sequelize = new Sequelize("products", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
