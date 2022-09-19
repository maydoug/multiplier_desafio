const { produtos } = require('../data/models');

module.exports = {
    async add(req, res) {

        try {
            const { idCategoria, codigo, nome, descricao, valor, status } = req.body;
            const produto = await produtos.create({ idCategoria, codigo, nome, descricao, valor, status })
            return res.status(200).json({ message: 'Cadastrado com sucesso!', produto });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },


};
