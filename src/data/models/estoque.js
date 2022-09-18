const estoque = (sequelize, DataTypes) => {
    return sequelize.define('estoque', {
        idProduto: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        reserva: DataTypes.INTEGER,
        status: DataTypes.TINYINT
    }); 
};

module.exports = estoque;