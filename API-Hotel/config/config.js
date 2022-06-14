require('dotenv').config()

const{
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_DIALEG
}=process.env;
module.exports =
{
  "development": {
    "username": "root",
    "password": "",
    "database": "handphones",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALEG
  }
}