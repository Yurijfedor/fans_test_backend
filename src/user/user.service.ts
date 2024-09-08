import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(createUserDto: any): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  // Метод для поиска пользователя по имени
  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({
      where: { name: username },
    });
  }
  // Метод для поиска пользователя по id
  async getUserById(id: string): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
