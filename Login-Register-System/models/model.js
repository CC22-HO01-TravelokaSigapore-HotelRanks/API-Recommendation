const { Sequelize } = require('sequelize');
const sequelize = require('../db/dbConnection');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  birth_date: {
    type: Sequelize.DATEONLY,
  },
  nid: {
    type: Sequelize.INTEGER,
  },
  family: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hobby: {
    type: Sequelize.STRING,
    get() {
      if (this.getDataValue('hobby') === null) {
        return this.getDataValue('hobby');
      }
      const rawData = this.getDataValue('hobby').replace('[', '').replace(']', '').split(',');
      rawData.forEach((value, index) => {
        if (index === 0) {
          rawData[index] = value.replace(/[\']/g, '');
          return;
        }
        rawData[index] = value.replace(/[\']/g, '').replace(/[\s]/, '');
      });
      return rawData;
    },
  },
  search_history: {
    type: Sequelize.STRING,
    get() {
      if (this.getDataValue('search_history') === null) {
        return this.getDataValue('search_history');
      }
      const rawData = this.getDataValue('search_history').replace('[', '').replace(']', '').split(',');
      rawData.forEach((value, index) => {
        if (index === 0) {
          rawData[index] = value.replace(/[\']/g, '');
          return;
        }
        rawData[index] = value.replace(/[\']/g, '').replace(/[\s]/, '');
      });
      return rawData;
    },
  },
  stay_history: {
    type: Sequelize.STRING,
    get() {
      if (this.getDataValue('stay_history') === null) {
        return this.getDataValue('stay_history');
      }
      const rawData = this.getDataValue('stay_history').replace('[', '').replace(']', '').split(',');
      rawData.forEach((value, index) => {
        if (index === 0) {
          rawData[index] = value.replace(/[\']/g, '');
          return;
        }
        rawData[index] = value.replace(/[\']/g, '').replace(/[\s]/, '');
      });
      return rawData;
    },
  },
  special_needs: {
    type: Sequelize.STRING,
    get() {
      if (this.getDataValue('special_needs') === null) {
        return this.getDataValue('special_needs');
      }
      const rawData = this.getDataValue('special_needs').replace('[', '').replace(']', '').split(',');
      rawData.forEach((value, index) => {
        if (index === 0) {
          rawData[index] = value.replace(/[\']/g, '');
          return;
        }
        rawData[index] = value.replace(/[\']/g, '').replace(/[\s]/, '');
      });
      return rawData;
    },
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
    set(value) {
      const val = value.replace(/[\s]/g, '').toLowerCase();
      console.log(val);
      this.setDataValue('userName', val);
    },
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  reviewCounter: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
