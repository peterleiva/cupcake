export interface Page {
  pageIndex: number;
  pageSize: number;
}

export interface PagedResults<T> {
  data: T[];
  pageIndex: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  nextPage: number;
}
