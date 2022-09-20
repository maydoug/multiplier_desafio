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

};