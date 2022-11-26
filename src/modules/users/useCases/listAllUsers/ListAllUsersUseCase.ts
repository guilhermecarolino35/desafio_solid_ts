import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const verifyIfIsAdmin = this.usersRepository.findById(user_id);
    if (!verifyIfIsAdmin) {
      throw new Error("Usuario nao existe ");
    }
    if (!verifyIfIsAdmin.admin) {
      throw new Error("Usuario nao Admin ");
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
