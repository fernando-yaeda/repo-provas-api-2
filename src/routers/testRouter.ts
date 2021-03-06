import { Router } from 'express';
import testController from '../controllers/testController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';

const testRouter = Router();

testRouter.get('/tests', ensureAuthenticatedMiddleware, testController.find);
testRouter.post('/tests', ensureAuthenticatedMiddleware, testController.newTest);
testRouter.patch('/tests', ensureAuthenticatedMiddleware, testController.updateViews);

export default testRouter;
