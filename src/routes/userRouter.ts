import { Router, IRouter } from "express";
import userController from "../controllers/userController";

const router: IRouter = Router();

router.get("/", userController.getUsers);

export default router;
