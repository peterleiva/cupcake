import { RouteProp, useRoute } from '@react-navigation/native';
import { Suspense } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { CatalogList, CategoryList } from '@/components/catalog';

type SearchParams = Record<string, { category: string }>;

const Search = () => {
  const { params } = useRoute<RouteProp<SearchParams>>();

  return (
    <Suspense
      fallback={
        <ActivityIndicator
          animating={true}
          size="large"
          color={MD2Colors.brown300}
          style={style.loader}
        />
      }
    >
      <CategoryList />
      <CatalogList category={params?.category} />
    </Suspense>
  );
};

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
