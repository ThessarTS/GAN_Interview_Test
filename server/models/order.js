'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Salesman, { foreignKey: "Salesman_id" })
      Order.belongsTo(models.Customer, { foreignKey: "Customer_id" })
    }
  }
  Order.init({
    Order_date: DataTypes.DATE,
    Amount: DataTypes.INTEGER,
    Salesman_id: DataTypes.INTEGER,
    Customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};