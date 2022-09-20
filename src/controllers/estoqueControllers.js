const { estoque } = require('../data/models');

module.exports = {

    async getById(req, res) {
        try {
            const est = await estoque.findByPk(req.params.id);
            return est.status(200).json(est);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async updateEstoque(req, res) {
        try {
            const est = await estoque.findByPk(req.params.id);
            await est.update(req.body);
            return res.status(200).json(est)
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delEstoque(req, res) {
        return res.status(501).json({ message: "não se pode deletar um estoque" });
    }

};