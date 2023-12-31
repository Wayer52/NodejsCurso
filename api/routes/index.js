const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');


const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  //Rutas
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);

}

module.exports = routerApi;

