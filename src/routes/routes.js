
const express = require('express');
const router = express.Router();

// Requerir el método controller
const controller = require('../controllers/controller')

router.get('/', controller.login);

// Rutas
router.get('/', controller.login);
router.post('/login', controller.login_in);

router.get('/register', controller.register);
router.post('/register', controller.save_register);

router.get('/cajero', controller.cajero);
router.post('/cajero', controller.pedido);

router.get('/list', controller.list);
router.get('/chef', controller.chef);

router.get('/listm', controller.listm);
router.get('/mesero', controller.mesero);

router.post('/preparando/:id', controller.updateStatus);
router.post('/porentregar/:id', controller.updateStatusPorentregar);
router.post('/entregado/:id', controller.updateStatusentregado);




module.exports = router;