const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
  logging: false
});

sequelize.authenticate()
  .then(() => console.log("Banco de dados conectado!"))
  .catch(err => console.error("Erro ao conectar:", err));

module.exports = sequelize;
