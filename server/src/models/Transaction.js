const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Transaction",
    {
      Transaction_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Token_quantity: {
        type: DataTypes.INTEGER,
      },
      TotalPrice: {
        type: DataTypes.DECIMAL(10, 2),
      },
      PricePerToken: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Payment_Method: {
        type: DataTypes.STRING(50),
      },
      Payment_Currency: {
        type: DataTypes.STRING(10),
      },
      ID_User: {
        type: DataTypes.INTEGER,
      },
      ID_Property: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Transaction",
      timestamps: true,
    }
  );
};
