import { BaseService } from "./base.service";
import { UserRepository } from "../repositories/user.repository";
import type { Prisma, User } from "@prisma/client";
import { NotFoundError } from "../utils/http-errors";

export class UserService extends BaseService<User> {
  private readonly userRepository: UserRepository;

  constructor(prisma: any) {
    super(prisma);
    this.userRepository = new UserRepository(prisma);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async create(data: Prisma.UserCreateInput) {
    return this.userRepository.create(data);
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await this.userRepository.update(id, data);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  }

  async delete(id: string) {
    const success = await this.userRepository.delete(id);
    if (!success) {
      throw new NotFoundError("User not found");
    }
    return success;
  }
}
