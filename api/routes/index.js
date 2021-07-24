const { Router } = require('express');
const parkings = require('./parkings')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routesManager = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routesManager.use('/parkings', parkings)


module.exports = routesManager;