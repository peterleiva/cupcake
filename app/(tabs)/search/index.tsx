import { RouteProp, useRoute } from '@react-navigation/native';
import { Suspense } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { CatalogList, CategoryList } from '@/components/catalog';
import Loader from '@/components/Loader';

type SearchParams = Record<string, { category: string }>;

const Search = () => {
  const { params } = useRoute<RouteProp<SearchParams>>();

  return (
    <Suspense fallback={<Loader />}>
      <CategoryList />
      <CatalogList category={params?.category} />
    </Suspense>
  );
};

export default Search;
