import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // Не извлекаем пароль, если он не используется
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user.toJSON();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
