import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllCategories } from './categories.api';

export function useGetCategories() {
  return useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
}
