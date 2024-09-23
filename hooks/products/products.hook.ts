import { useQuery } from '@tanstack/react-query';
import { getProducts } from './products.api';
import { Page } from '@/libs/pagination';
import { productsMapper } from './products.map';

export function useGetProducts(
  categoryID: string | null | undefined,
  { pageIndex = 0, pageSize = 20 }: Partial<Page> = {},
) {
  const query = useQuery({
    queryKey: ['products', categoryID, pageIndex, pageSize],
    queryFn: async () => {
      return getProducts({ pageIndex, pageSize }, categoryID);
    },
  });

  return {
    ...query,
    data: (query.data?.data ?? [])?.map?.(productsMapper),
  };
}
