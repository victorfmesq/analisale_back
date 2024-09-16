import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async registerUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const hashedPassword = this.hashPassword(password);
    const user = new User(name, email, hashedPassword);
    await this.userRepository.save(user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  private hashPassword(password: string): string {
    // Implementar hashing da senha
    return password;
  }
}
