const db = {
  HOST: process.env.HOST || 'localhost',
  SQLINSTANCE: process.env.SQLINSTANCE || '',
  USER: process.env.USER || 'root',
  PASSWORD: process.env.PASSWORD || 'root',
  DB: 'node_mysql',
  dialect: process.env.DBTYPE || 'mariadb',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = db;