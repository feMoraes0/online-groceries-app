import express, { Request, Response } from 'express';
import Product from './models/Product';

const routes = express.Router();

routes.get('/products/category/:id', (request: Request, response: Response): Response => {
  const { id } =  request.params;
  Product.byCategory(Number(id));
  return response.status(201).json(Product.byCategory(Number(id)));
});

export default routes;