import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get()
  getAll() {
    return [
      {
        id: 1,
        name: 'Category 1',
      },
      {
        id: 2,
        name: 'Category 2',
      },
    ];
  }
}
