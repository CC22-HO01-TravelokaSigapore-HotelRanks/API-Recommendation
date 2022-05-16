'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('hotel_dummy', {
    Column_1:{
      type:Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
  },
  name:{
      type:Sequelize.STRING(60),
      allowNull: false
  },
  latitude:{
      type:Sequelize.DECIMAL(16, 15),
      allowNull: false
  },
  longitude:{
      type:Sequelize.DECIMAL(17, 14),
      allowNull: false
  },
  neighborhood:{
      type:Sequelize.STRING(4),
      allowNull: false
  },
  hotel_star:{
      type:Sequelize.DECIMAL(2, 1),
      allowNull: false
  },
  price_per_night:{
      type:Sequelize.INTEGER,
      allowNull:false
  },
  room_type:{
      type:Sequelize.STRING(12),
      allowNull: false
  },
  free_refund:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  type_nearby_destination:{
      type:Sequelize.STRING(61),
      allowNull: false
  },
  nearby_destination:{
      type:Sequelize.INTEGER,
      allowNull: false
  },
  breakfast:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  pool:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  wifi:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  parking:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  smoking:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  air_conditioner:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  wheelchair_access:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  average_bed_size:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  staff_vaccinated:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  child_area:{
      type:Sequelize.STRING(5),
      allowNull: false
  },
  price_category:{
      type:Sequelize.INTEGER,
      allowNull: false
  }
   });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
