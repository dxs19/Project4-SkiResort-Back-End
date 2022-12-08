'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resorts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: true,
        type: Sequelize.STRING
      },
      latitude: {
        allowNull: true,
        type: Sequelize.STRING
      },
      height: {
        allowNull: true,
        type: Sequelize.STRING
      },
      runs: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('resorts');
  }
};