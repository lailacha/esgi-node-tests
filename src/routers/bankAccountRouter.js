import express from 'express';
import bankAccountController from '../controllers/bankAccountController';


const bankAccountRouter = express.Router();

bankAccountRouter.post('/create',bankAccountController.create)

export { bankAccountRouter };