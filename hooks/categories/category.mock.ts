import { DateTime } from 'luxon';

import type { Category } from './categories.interface';

export const CATEGORY: Category = {
  id: '1',
  name: 'Category 1',
  slug: 'category-1',
  createdAt: DateTime.now(),
  updatedAt: DateTime.now(),
};

export const setupCategories = (times = 1) => {
  return Array.from({ length: times }, (_, index) => ({
    id: `${index + 1}`,
    name: `Category ${index + 1}`,
    slug: `category-${index + 1}`,
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
  }));
};
