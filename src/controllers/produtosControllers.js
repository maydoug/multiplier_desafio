const { produtos } = require('../data/models');

module.exports = {
    async add(req, res) {

        try {
            const { idCategoria, codigo, nome, descricao, valor, status } = req.body;
            const produto = await produtos.create({ idCategoria, codigo, nome, descricao, valor, status })
            return res.status(200).json({ message: 'Produto cadastrado com sucesso!', produto });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async getAll(req, res) {

        try {
            const prod = await produtos.findAll();
            return res.status(200).json(prod);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async getById(req, res) {
        try {
            const prod = await produtos.findByPk(req.params.id);
            return res.status(200).json(prod);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delProduto(req, res) {
        try {
            await produtos.destroy({
                where: {
                    id: req.params.id,
                },
            });
            return res.status(200).json({ message: "Produto deletado com sucesso!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },


};
