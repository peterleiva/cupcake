import { Suspense } from 'react';

import { CatalogList, CategoryList } from '@/components/catalog';
import Loader from '@/components/Loader';
import { useSearchScreenParams } from '@/hooks/useSearchParams';

const Search = () => {
  const { category } = useSearchScreenParams();

  return (
    <Suspense fallback={<Loader />}>
      <CategoryList />
      <CatalogList category={category} />
    </Suspense>
  );
};

export default Search;
