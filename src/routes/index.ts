import { Application } from "express";
import UserRouter from "./userRouter";

export default (app: Application) => {
  app.use("/users", UserRouter);
};
