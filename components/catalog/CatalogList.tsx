import { FlatList, View } from 'react-native';

import { useGetProducts } from '@/hooks/products';
import EmptyState from '../EmptyState';
import Loader from '../Loader';
import CatalogCard from './CatalogCard';

interface CatalogListProps {
  category?: string | null | undefined;
  favorites?: boolean;
  searchterm?: string;
  max?: number;
  numColumns?: number;
}

export default function CatalogList({
  category,
  favorites,
  searchterm,
  max,
  numColumns = 1,
}: CatalogListProps) {
  const { data, isFetching, refetch, hasNextPage, fetchNextPage } =
    useGetProducts(
      {
        category,
        favorites,
        searchterm,
      },
      { pageSize: max },
    );

  return (
    <>
      <FlatList
        onRefresh={refetch}
        refreshing={isFetching}
        ListEmptyComponent={() => !isFetching && <EmptyState />}
        data={data}
        numColumns={numColumns}
        key={numColumns}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        onEndReached={() => {
          !isFetching && hasNextPage && !max && fetchNextPage();
        }}
        renderItem={({ item: product }) => (
          <CatalogCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category?.name}
            favorite={product.favorite}
            thumbnail={product.thumbnail}
          ></CatalogCard>
        )}
        ListFooterComponent={() =>
          isFetching &&
          (hasNextPage || !data || data?.length === 0) && (
            <View style={{ marginTop: 10 }}>
              <Loader />
            </View>
          )
        }
      />
    </>
  );
}
