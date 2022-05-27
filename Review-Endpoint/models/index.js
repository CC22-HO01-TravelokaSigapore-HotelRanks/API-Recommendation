const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST || dbConfig.SQLINSTANCE,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  dialectOptions: {
    socketPath: dbConfig.SQLINSTANCE,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = require("./model.js")(sequelize, Sequelize);
module.exports = db;