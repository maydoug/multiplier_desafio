const produtos = (sequelize, DataTypes) => {
    return sequelize.define('produtos', {
        idCategoria: DataTypes.INTEGER,
        codigo: DataTypes.STRING,
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        valor: DataTypes.DECIMAL,
        status: DataTypes.TINYINT
    }); 
};

module.exports = produtos;