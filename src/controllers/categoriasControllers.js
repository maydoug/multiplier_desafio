const { categorias } = require('../data/models');

module.exports = {
    async add(req, res) {

        try {
            const { codigo, titulo, status } = req.body;
            const categoria = await categorias.create({ codigo, titulo, status })
            console.log(categoria)            
            return res.status(200).json({ message: 'Cadastrado com sucesso!', categoria });
        } catch (error) {
            return res.status(400).json({ error: error.message});
        }
    },

};
