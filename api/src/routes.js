import { Router } from 'express';

import CustomerController from './app/controllers/CustomerController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/customers', CustomerController.store);
//routes.get('/customers', CustomerController.index);



export default routes;
