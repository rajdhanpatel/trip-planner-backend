module.exports = (sequelize, DataTypes) => {
    const Flight = sequelize.define('flight',
        {
            origin: DataTypes.STRING,
            destination: DataTypes.STRING,
            flight_number: DataTypes.STRING,
            departure_time: DataTypes.DATE,
            arrival_time:DataTypes.DATE,
            price: DataTypes.FLOAT
            },
            {
                timestamps: true
            }
    );
  
    return Flight;
  };
