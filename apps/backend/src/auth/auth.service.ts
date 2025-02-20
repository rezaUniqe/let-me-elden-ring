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

  async validateUser(dto: LoginUserDTO): Promise<boolean> {
    const user = await this.usersService.findOne(dto.username);
    const passwordHash = crypto
      .createHash('md5')
      .update(dto.password)
      .digest('hex');

    if (user) {
      if (user.password === passwordHash) {
        return true;
      } else {
        return false;
      }
    } else {
      await this.usersService.create({
        username: dto.username,
        password: passwordHash,
      });
      return true;
    }
  }

  async login(user: LoginUserDTO): Promise<string | null> {
    const userIsValid = await this.validateUser(user);
    if (userIsValid) {
      return this.jwtService.sign(user);
    } else {
      return null;
    }
  }
}
