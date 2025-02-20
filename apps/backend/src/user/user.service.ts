import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.userRepo.insert({
      username: createUserDto.username,
      password: createUserDto.password,
    });
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(username: string) {
    return this.userRepo.findOne({ where: { username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, {
      password: updateUserDto.password,
      username: updateUserDto.username,
    });
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
