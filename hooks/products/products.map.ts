import { DateTime } from 'luxon';
import { Product, ProductDTO } from './products.interface';
import { categoryDTOMap } from '../categories/categories.map';

export function productsMapper(product: ProductDTO): Product {
  return {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category ? categoryDTOMap(product.category) : undefined,
    createdAt: DateTime.fromISO(product.createdAt),
    updatedAt: DateTime.fromISO(product.updatedAt),
  };
}
