module.exports = (sequelize, Sequelize) => {
  const review = sequelize.define("coba_review", {
    id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    },
    text: {
    type: Sequelize.TEXT
    },
    labels: {
    type: Sequelize.BIGINT
    },
    rating: {
    type: Sequelize.DOUBLE
    },
    dates: {
    type: Sequelize.DATE
    },
    hotel_id: {
    type: Sequelize.BIGINT    
    },
    user_id: {
    type: Sequelize.BIGINT
    }
    },{tableName: 'coba_review', 
    timestamps: false});
return review;
};