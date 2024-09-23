import { useSuspenseQuery } from '@tanstack/react-query';

import { getAllCategories } from './categories.api';
import { categoryDTOMap } from './categories.map';

export function useGetCategories() {
  const query = useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  return {
    ...query,
    data: (query.data ?? []).map(categoryDTOMap),
  };
}
