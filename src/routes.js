const router = require('express').Router();
const categoriasControllers = require('./controllers/categoriasControllers');


// ** Rotas Categorias ** //
router.post('/categorias', categoriasControllers.add);


module.exports= router;