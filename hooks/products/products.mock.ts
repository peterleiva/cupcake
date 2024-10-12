import { CATEGORY } from '@/hooks/categories/category.mock';
import { Product } from './products.interface';
import { DateTime } from 'luxon';

export const PRODUCT: Product = {
  id: '1',
  name: 'Item 1',
  price: 10.0,
  description: 'Item 1 description',
  createdAt: DateTime.now(),
  updatedAt: DateTime.now(),
  favorite: false,
  category: CATEGORY,
};

export const setupProducts = (times = 1) => {
  return Array.from({ length: times }, (_, index) => ({
    id: `${index + 1}`,
    name: `Item ${index + 1}`,
    price: 10.0 * (index + 1),
    description: `Item ${index + 1} description`,
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
    favorite: false,
    category: CATEGORY,
  }));
};
