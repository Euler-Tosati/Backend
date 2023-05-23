import { Request, Response, request, response } from "express";
import { UsersService } from "../services/UserService";

class UsersController {

  async create(request, response): Promise<Response> {
    const { email } = request.body;
    const usersService = new UsersService();

    const user = await usersService.create(email);
    return response.json(user);
  };
}

export { UsersController };