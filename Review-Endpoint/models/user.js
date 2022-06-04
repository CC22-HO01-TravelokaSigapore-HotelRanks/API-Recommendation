module.exports = (sequelize, Sequelize) => {
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

  return User;
};
