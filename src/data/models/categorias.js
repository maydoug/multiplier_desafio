const categorias = (sequelize, DataTypes) => {
    return sequelize.define('categorias', {
        codigo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        status: DataTypes.INTEGER
    }); 
};

module.exports = categorias;