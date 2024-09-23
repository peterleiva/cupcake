import { DateTime } from 'luxon';
import { Product, ProductDTO } from './products.interface';

export function productsMapper(product: ProductDTO): Product {
  return {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category
      ? {
          _id: product.category,
          name: 'category X',
          slug: 'slug-x',
        }
      : undefined,
    createdAt: DateTime.fromISO(product.createdAt),
    updatedAt: DateTime.fromISO(product.updatedAt),
  };
}
