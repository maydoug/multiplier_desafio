const router = require('express').Router();
const categoriasControllers = require('./controllers/categoriasControllers');
const produtosControllers = require('./controllers/produtosControllers');
const estoqueControllers = require('./controllers/estoqueControllers');


// ** Rotas Categorias ** //
router.post('/categorias', categoriasControllers.add);
router.get('/categorias', categoriasControllers.getAll);
router.get('/categorias/:id', categoriasControllers.getById);
router.delete('/categorias/:id', categoriasControllers.delCategoria);
router.put('/categorias/:id', categoriasControllers.updateCategoria);

// ** Rotas Produtos ** //
router.post('/produtos', produtosControllers.add);
router.get('/produtos', produtosControllers.getAll);
router.get('/produtos/:id', produtosControllers.getById);
router.delete('/produtos/:id', produtosControllers.delProduto);
router.put('/produtos/:id', produtosControllers.updateProduto);

// ** Rotas Estoque ** //
router.get('/produtos/:id/estoque', estoqueControllers.getById);
router.patch('/produtos/:id/estoque', estoqueControllers.updateEstoque);

module.exports= router;