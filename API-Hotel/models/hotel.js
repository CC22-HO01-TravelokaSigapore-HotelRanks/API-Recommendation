module.exports=(sequelize,DataTypes)=>{
    const hotel = sequelize.define('hotel',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(60),
            allowNull: false
        },
        latitude:{
            type:DataTypes.DECIMAL(16, 15),
            allowNull: false
        },
        longitude:{
            type:DataTypes.DECIMAL(17, 14),
            allowNull: false
        },
        neighborhood:{
            type:DataTypes.STRING(28),
            allowNull: false
        },
        hotel_star:{
            type:DataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        price_per_night:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        // room_type:{type:DataTypes.STRING(12),allowNull: false},
        free_refund:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        type_nearby_destination:{
            type:DataTypes.STRING(61),
            allowNull: false,
            get() {
                return this.getDataValue('type_nearby_destination').replace('[','').replace(']','').split(',')
            },
            set(val) {
               this.setDataValue('type_nearby_destination',val.join(','));
            }
        },
        nearby_destination:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        breakfast:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        pool:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        wifi:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        parking:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        smoking:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        air_conditioner:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        wheelchair_access:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        average_bed_size:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        staff_vaccinated:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        child_area:{
            type:DataTypes.STRING(5),
            allowNull: false
        },
        price_category:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        image_links:{
            type:DataTypes.STRING(851),
            allowNull: false,
            get() {
                return this.getDataValue('image_links').replace('[','').replace(']','').split(',');
                // return this.getDataValue('image_links').split(',')
            },
            set(val) {
               this.setDataValue('image_links',val.join(','));
            }
        }
    },{
      tableName: 'hotel_dummy_photos',
      timestamps: false
    
    });
    
    return hotel;
}