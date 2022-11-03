import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BookDto } from '../dtos/book.dto';
import { Book } from '../entities/book.entity';

@Injectable()
export class BooksService {
  constructor(private config: ConfigService) {}
  private counterId = 1;
  private books: Book[] = [
    {
      id: 1,
      title: 'Animal Farm ',
      author: ['George Orwell'],
      category: 'Dystopian Fiction',
      pages: 100,
      price: 5.0,
    },
  ];

  findAll() {
    const apiKey = this.config.get('API_KEY');
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((item) => item.id === id);
  }

  save(payload: BookDto) {
    this.counterId = this.counterId + 1;
    console.log('payload', payload);
    const newBook = {
      id: this.counterId,
      ...payload,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, payload: Partial<BookDto>) {
    const book = this.findOne(id);
    const index = this.books.findIndex((item) => item.id === id);
    this.books[index] = {
      ...book,
      ...payload,
    };
    console.log(this.books[index]);
  }

  remove(id: number) {
    const index = this.books.findIndex((item) => item.id === id);
    if (index != -1) {
      this.books.splice(index, 1);
      return true;
    }
    console.log(false);
  }
}
