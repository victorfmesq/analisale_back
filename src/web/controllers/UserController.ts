import { Request, Response } from 'express';
import { UserService } from '../../application/services/UserService';

export class UserController {
  constructor(private userService: UserService) {}

  async register(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    try {
      const user = await this.userService.registerUser(name, email, password);

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    }
  }

  // Métodos adicionais para login, visualização de usuário, etc.
}
