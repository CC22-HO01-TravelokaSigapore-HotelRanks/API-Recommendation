const db = {
  HOST: process.env.DB_HOST || 'localhost',
  SQLINSTANCE: process.env.SQLINSTANCE || '',
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || 'root',
  DB: process.env.DB_NAME || 'node_mysql',
  dialect: process.env.DB_TYPE || 'mariadb',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = db;
