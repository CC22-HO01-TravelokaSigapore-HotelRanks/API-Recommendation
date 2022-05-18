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
    "password": "pakehddbiarmurah",
    "database": "Productiondatabase",
    "host": "34.122.198.154",
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