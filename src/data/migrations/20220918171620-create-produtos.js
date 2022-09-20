'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categorias',
          key: 'id'
        }
      },
      codigo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT('medium'),
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },
    
    });
    

  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.dropTable('produtos');
   
  }
};
