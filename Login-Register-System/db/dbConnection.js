const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST || dbConfig.SQLINSTANCE,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
  dialectOptions: {
    socketPath: dbConfig.SQLINSTANCE,
  },
});

module.exports = sequelize;
