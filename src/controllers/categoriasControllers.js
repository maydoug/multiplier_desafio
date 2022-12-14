const { categorias } = require('../data/models');

module.exports = {
    async add(req, res) {

        try {
            const { codigo, titulo, status } = req.body;
            const categoria = await categorias.create({ codigo, titulo, status })
            return res.status(200).json({ message: 'Cadastrado com sucesso!', categoria });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    async getAll(req, res) {

        try {
            const cat = await categorias.findAll();
            return res.status(200).json(cat);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    async getById(req, res) {
        try {
            const cat = await categorias.findByPk(req.params.id);
            return res.status(200).json(cat);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delCategoria(req, res) {
        try {
            await categorias.destroy({
                where: {
                    id: req.params.id,
                },
            });
            return res.status(200).json({ message: "Categoria deletada com sucesso!" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async updateCategoria(req, res) {
        try {
            const { codigo, titulo, status } = req.body;

            await categorias.update(
                { codigo, titulo, status },
                {
                    where: { id: req.params.id },
                }
            );

            return res.status(200).json({ message: 'Categoria atualizada com sucesso' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

};

