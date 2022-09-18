'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('categorias');

  }
};
