import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from './categories.api';

export function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
}
