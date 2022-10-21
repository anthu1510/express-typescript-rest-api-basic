import { Request, Response } from "express";
import userModel from "../models/userModel";

class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await userModel.getAllUsers();
    res.json(users);
  }

  async addUser(req: Request, res: Response) {
    const user = await userModel.create(req.body);
    res.json(user);
  }
}

export default new UserController();
