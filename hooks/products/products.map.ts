import { DateTime } from 'luxon';
import { Product, ProductDTO } from './products.interface';

export function productsMapper(product: ProductDTO): Product {
  return {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    categoryID: product.categoryID,
    createdAt: DateTime.fromISO(product.createdAt),
    updatedAt: DateTime.fromISO(product.updatedAt),
  };
}
