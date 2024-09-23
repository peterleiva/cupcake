import axios from 'axios';

import { API } from '@/app.env';
import { Page, PagedResults } from '@/libs/pagination';
import { ProductDTO } from './products.interface';

const PRODUCTS_ENDPOINTS = `${API}/products`;

export async function getProducts(
  { pageIndex = 0, pageSize = 20 }: Partial<Page> = {},
  categoryID: string | null | undefined,
): Promise<PagedResults<ProductDTO>> {
  const res = await axios.get(PRODUCTS_ENDPOINTS, {
    params: {
      limit: pageSize,
      page: pageIndex,
      category: categoryID ?? '',
    },
  });

  return res.data;
}
