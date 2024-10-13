import axios from 'axios';

import { API } from '@/app.env';
import { Page, PagedResultsDTO } from '@/libs/pagination';
import type { ProductDTO, ProductFilter } from './products.interface';

const PRODUCTS_ENDPOINTS = `${API}/products`;

export async function getProducts(
  { pageIndex = 0, pageSize = 20 }: Partial<Page> = {},
  { category = '', favorites, searchterm }: ProductFilter,
): Promise<PagedResultsDTO<ProductDTO>> {
  const res = await axios.get(PRODUCTS_ENDPOINTS, {
    params: {
      limit: pageSize,
      page: pageIndex,
      category,
      favorites,
      searchterm,
    },
  });

  return res.data;
}
