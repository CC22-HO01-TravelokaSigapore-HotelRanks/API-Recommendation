module.exports = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('hotel_dummy', {
    Column_1:{
     type:Sequelize.INTEGER,
     primaryKey: true,
     allowNull: false
    },
  })
}