'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salesman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Salesman.hasMany(models.Order, { foreignKey: 'Salesman_id' })
    }
  }
  Salesman.init({
    Salesman_name: DataTypes.STRING,
    Salesman_city: DataTypes.STRING,
    Commission: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Salesman',
  });
  return Salesman;
};