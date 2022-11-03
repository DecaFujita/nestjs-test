import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BooksService } from './services/books.service';
import { CategoriesService } from './services/categories.service';

@Module({
  controllers: [BooksController, CategoriesController],
  providers: [BooksService, CategoriesService],
  exports: [],
})
export class BooksModule {}
