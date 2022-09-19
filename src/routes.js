const router = require('express').Router();
const categoriasControllers = require('./controllers/categoriasControllers');


// ** Rotas Categorias ** //
router.post('/categorias', categoriasControllers.add);
router.get('/categorias', categoriasControllers.getAll);
router.get('/categorias/:id', categoriasControllers.getById);
router.delete('/categorias/:id', categoriasControllers.delCategoria);


module.exports= router;