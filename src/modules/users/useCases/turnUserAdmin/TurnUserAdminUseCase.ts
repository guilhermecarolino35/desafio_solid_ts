import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const turnAdmin = this.usersRepository.findById(user_id);
    if (!turnAdmin) {
      throw new Error("There is no user with this id");
    }
    const newAdmin = this.usersRepository.turnAdmin(turnAdmin);
    return newAdmin;
  }
}

export { TurnUserAdminUseCase };
