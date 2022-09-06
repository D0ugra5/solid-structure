import { IUsersRepository } from "../IUsersRepository";
import { User } from "./../../entities/User";

export class PostgresUsersRepositories implements IUsersRepository {
  private users: User[] = [];

  findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return new Promise((resolve) => resolve(user));
  }
  save(user: User): Promise<void> {
    this.users.push(user);
    return new Promise((resolve) => resolve());
  }
}
