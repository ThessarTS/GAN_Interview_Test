'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Order_date: {
        type: Sequelize.DATE
      },
      Amount: {
        type: Sequelize.INTEGER
      },
      Salesman_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Salesmans', key: 'id' }
      },
      Customer_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Customers', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};