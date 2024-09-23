import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductModel } from './schema/products.schema';
import { ProductDTO } from './products.interface';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private model: ProductModel) {}

  async getAll() {
    return this.model.find().exec();
  }

  async create(data: ProductDTO) {
    return this.model.create(data);
  }

  async uploadImage(id: string, file: Express.Multer.File) {
    if (!isValidObjectId(id)) {
      throw new HttpException('Invalid product ID', HttpStatus.BAD_REQUEST);
    }

    const product = await this.model.findById(id);

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    product.thumbnail = file.buffer;
    await product.save();

    return product;
  }

  async getImage(id: string): Promise<Buffer> {
    if (!isValidObjectId(id)) {
      throw new HttpException('Invalid product ID', HttpStatus.BAD_REQUEST);
    }

    const product = await this.model.findById(id, { thumbnail: 1 }).exec();

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return product.thumbnail;
  }
}
