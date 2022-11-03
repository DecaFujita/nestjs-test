import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryDto } from '../dtos/category.dtos';
import { CategoriesService } from '../services/categories.service';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @Get()
  getAll() {
    return this.categoryService.findAll();
  }

  @Post()
  create(@Body() payload: CategoryDto) {
    return this.categoryService.create(payload);
  }

  @Put()
  update(@Body() payload: any) {
    return this.categoryService.update(payload);
  }

  @Delete()
  remove(@Body() payload: any) {
    return this.categoryService.remove(payload);
  }
}
