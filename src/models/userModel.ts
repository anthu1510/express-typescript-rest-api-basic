import { PrismaClient, Prisma, Users } from "../generated/client";
import hashPwd from "password-hash";

const prisma = new PrismaClient();

export const hashPassword = ({ password }: Prisma.UsersCreateInput): string => {
  return hashPwd.generate(password);
};

class UserModel {
  async create(userInput: Prisma.UsersCreateInput): Promise<Users> {
    userInput.password = hashPassword(userInput);
    const user = await prisma.users.create({
      data: userInput,
    });
    return user;
  }

  async getAllUsers(): Promise<Users[]> {
    const users = await prisma.users.findMany();
    return users;
  }
}

export default new UserModel();
