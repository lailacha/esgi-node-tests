import { Router } from "express";
import { bankAccountRouter } from "./bankAccountRouter";

const apiRouter = Router();

apiRouter.use("/api", bankAccountRouter);

export {
    apiRouter
}