import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductModel } from './schema/products.schema';
import { ProductDTO } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private model: ProductModel) {}

  async getAll() {
    return this.model.find().exec();
  }

  async create(data: ProductDTO) {
    return this.model.create(data);
  }
}
