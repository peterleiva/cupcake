import { Page, PagedResultsDTO } from '@/libs/pagination';
import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { getProducts } from './products.api';
import type { ProductDTO, ProductFilter } from './products.interface';
import { productsMapper } from './products.map';

export function useGetProducts(
  { category, favorites, searchterm }: Partial<ProductFilter>,
  { pageIndex = 0, pageSize = 10 }: Partial<Page> = {},
) {
  const query = useInfiniteQuery<
    PagedResultsDTO<ProductDTO>,
    DefaultError,
    InfiniteData<PagedResultsDTO<ProductDTO>, number>,
    QueryKey,
    number
  >({
    queryKey: [
      'products',
      category,
      pageIndex,
      pageSize,
      favorites,
      searchterm,
    ],
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.isFinalPage ? undefined : lastPage.pageIndex + 1,
    queryFn: async ({ pageParam }) => {
      return getProducts(
        { pageIndex: pageParam, pageSize },
        { category, favorites, searchterm },
      );
    },
  });

  return {
    ...query,
    data: query.data?.pages
      .map((p) => p.data)
      ?.flatMap?.((p) => p.map(productsMapper)),
  };
}
