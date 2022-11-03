import { Injectable } from '@nestjs/common';
import { CategoryDto } from '../dtos/category.dtos';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'thriller',
    },
  ];

  findAll() {
    return this.categories;
  }

  // findOne() {}

  create(category: CategoryDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...category,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(payload: any) {
    const index = this.categories.findIndex(
      (item) => item.name === payload.currentName,
    );
    this.categories[index].name = payload.editedName;
    return this.categories[index];
  }

  remove(payload: any) {
    const index = this.categories.findIndex(
      (item) => item.name === payload.currentName,
    );
    this.categories.splice(index, 1);
  }
}
