'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false, type:Sequelize.STRING
      },
      middleName: Sequelize.STRING,
      email: {
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      password: {
        type:Sequelize.STRING,
        allowNull:false
      },
      verify: {
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: false
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
    await queryInterface.dropTable('Users');
  }
};