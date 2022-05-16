require('dotenv').config()

const{
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
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
    "username": "root",
    "password": "barkbark3.0isheretohelpyou",
    "database": "Productiondatabase",
    "host": "35.184.216.155",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALEG
  }
}