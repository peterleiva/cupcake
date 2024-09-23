import { DateTime } from 'luxon';
import { Category, CategoryDTO } from './categories.interface';

export function categoryDTOMap(category: CategoryDTO): Category {
  return {
    id: category._id,
    name: category.name,
    slug: category.slug,
    createdAt: DateTime.fromISO(category.createdAt),
    updatedAt: DateTime.fromISO(category.updatedAt),
  };
}
