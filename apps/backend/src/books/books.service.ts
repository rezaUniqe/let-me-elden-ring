import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id } });
  }

  create(book: Partial<Book>) {
    return this.bookRepository.save(book);
  }

  async update(id: number, book: Partial<Book>) {
    await this.bookRepository.update(id, book);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.bookRepository.delete(id);
    return { deleted: true };
  }
}
