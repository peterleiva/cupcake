import { useQuery } from '@tanstack/react-query';
import { getProducts } from './products.api';
import { Page } from '@/libs/pagination';
import { productsMapper } from './products.map';
import type { ProductFilter } from './products.interface';

export function useGetProducts(
  { category, favorites, searchterm }: Partial<ProductFilter>,
  { pageIndex = 0, pageSize = 20 }: Partial<Page> = {},
) {
  const query = useQuery({
    queryKey: [
      'products',
      category,
      pageIndex,
      pageSize,
      favorites,
      searchterm,
    ],
    queryFn: async () => {
      return getProducts(
        { pageIndex, pageSize },
        { category, favorites, searchterm },
      );
    },
  });

  return {
    ...query,
    data: (query.data?.data ?? [])?.map?.(productsMapper),
  };
}
