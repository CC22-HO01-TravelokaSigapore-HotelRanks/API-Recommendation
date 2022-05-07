const { Sequelize } = require('sequelize');
const sequelize = require('../db/dbConnection');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  birth_date: {
    type: Sequelize.STRING,
  },
  nid: {
    type: Sequelize.STRING,
  },
  family: {
    type: Sequelize.BOOLEAN,
  },
  hobby: {
    type: Sequelize.STRING,
  },
  search_history: {
    type: Sequelize.STRING,
  },
  stay_history: {
    type: Sequelize.STRING,
  },
  special_needs: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
  },
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
