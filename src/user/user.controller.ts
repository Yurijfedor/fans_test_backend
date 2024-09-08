import * as bcrypt from 'bcrypt';
import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  @UseGuards(JwtAuthGuard)
  async addUser(@Body() createUserDto: CreateUserDto) {
    // Хеширование пароля перед сохранением в базе данных
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.userService.createUser({
      ...createUserDto,
      password: hashedPassword,
    });
    console.log(user);
    return user;
  }

  @Get('get-user/:id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }
}
