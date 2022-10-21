import { Request, Response } from "express";

class UserController {
  getUsers(req: Request, res: Response) {
    res.send("this is user get");
  }
}

export default new UserController();
