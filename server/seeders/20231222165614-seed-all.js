'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salesmans = [
      {
        Salesman_name: 'Laura',
        Salesman_city: 'Bandung',
        Commission: 0.15
      },
      {
        Salesman_name: 'Minarty',
        Salesman_city: 'Jakarta',
        Commission: 0.12
      },
      {
        Salesman_name: 'Komarudin',
        Salesman_city: 'Bandung',
        Commission: 0.10
      },
      {
        Salesman_name: 'Agus',
        Salesman_city: 'Bandung',
        Commission: 0.14
      },
    ]
    salesmans.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })

    const customers = [
      {
        Customer_name: 'Andreas Susanto',
        Customer_city: 'Bandung',

      },
      {
        Customer_name: 'Bagus Prabangkara',
        Customer_city: 'Jakarta',

      },
      {
        Customer_name: 'Ganjar Sungkowo',
        Customer_city: 'Bandung',

      },
      {
        Customer_name: 'Deni Sumargo',
        Customer_city: 'Bandung',
      },
    ]
    customers.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })

    const orders = [
      {
        Order_date: '2023-01-01',
        Amount: 200000,
        Salesman_id: 1,
        Customer_id: 1
      },
      {
        Order_date: '2023-01-02',
        Amount: 250000,
        Salesman_id: 2,
        Customer_id: 1
      },
      {
        Order_date: '2023-01-03',
        Amount: 150000,
        Salesman_id: 3,
        Customer_id: 2
      },
      {
        Order_date: '2023-01-04',
        Amount: 300000,
        Salesman_id: 4,
        Customer_id: 3
      },
      {
        Order_date: '2023-01-05',
        Amount: 400000,
        Salesman_id: 1,
        Customer_id: 2
      },
      {
        Order_date: '2023-01-06',
        Amount: 350000,
        Salesman_id: 2,
        Customer_id: 3
      },
      {
        Order_date: '2023-01-07',
        Amount: 500000,
        Salesman_id: 3,
        Customer_id: 1
      },
      {
        Order_date: '2023-01-08',
        Amount: 200000,
        Salesman_id: 4,
        Customer_id: 3
      }
    ]
    orders.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Salesmans', salesmans)
    await queryInterface.bulkInsert('Customers', customers)
    await queryInterface.bulkInsert('Orders', orders)
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Salesmans', null, {})
    await queryInterface.bulkDelete('Customers', null, {})
    await queryInterface.bulkDelete('Orders', null, {})

  }
};
