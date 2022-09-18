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
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      status: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('categorias');

  }
};
