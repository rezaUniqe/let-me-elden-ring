import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { LoginUserDTO } from '../user/dto/loginUserDTO';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(dto: LoginUserDTO): Promise<User | null> {
    const user = await this.usersService.findOne(dto.username);
    const passwordHash = crypto
      .createHash('md5')
      .update(dto.password)
      .digest('hex');

    if (user) {
      if (user.password === passwordHash) {
        return user;
      } else {
        return null;
      }
    } else {
      return this.usersService.create({
        username: dto.username,
        password: passwordHash,
      });
    }
  }

  async login(user: LoginUserDTO): Promise<string | null> {
    const validateUser = await this.validateUser(user);
    if (validateUser) {
      return this.jwtService.sign(user);
    } else {
      return null;
    }
  }
}
