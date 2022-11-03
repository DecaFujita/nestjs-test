import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookDto } from '../dtos/book.dto';
import { BooksService } from '../services/books.service';
@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.findAll();
  }

  @Get(':bookId')
  findBook(@Param('bookId', ParseIntPipe) bookId: number) {
    return this.booksService.findOne(bookId);
  }

  @Post()
  create(@Body() payload: BookDto) {
    return this.booksService.save(payload);
  }

  @Put(':bookId')
  upDate(
    @Param('bookId', ParseIntPipe) bookId: number,
    @Body() payload: Partial<BookDto>,
  ) {
    return this.booksService.update(bookId, payload);
  }

  @Delete(':bookId')
  remove(@Param('bookId', ParseIntPipe) bookId: number) {
    return this.booksService.remove(bookId);
  }
}
