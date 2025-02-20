const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Feature",
    {
      ID_Feature: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Type: {
        type: DataTypes.STRING(50),
      },
      Country: {
        type: DataTypes.STRING(50),
      },
      City: {
        type: DataTypes.STRING(50),
      },
      Address: {
        type: DataTypes.STRING(100),
      },
      State: {
        type: DataTypes.STRING(50),
      },
      Postal_Code: {
        type: DataTypes.STRING(10),
      },
      Description: {
        type: DataTypes.STRING(600),
      },
      Square_foot: {
        type: DataTypes.INTEGER,
      },
      Amenities: {
        type: DataTypes.ARRAY(DataTypes.STRING(100)),
      },
      Rooms: {
        type: DataTypes.INTEGER,
      },
      Occupancy_Status: {
        type: DataTypes.STRING(50),
      },
      Link_Image: {
        type: DataTypes.ARRAY(DataTypes.STRING(300)),
      },
      Link_Document: {
        type: DataTypes.STRING(100),
      },
      More: {
        type: DataTypes.STRING(500),
      },
    },
    {
      tableName: "Feature",
      timestamps: false,
    }
  );
};
