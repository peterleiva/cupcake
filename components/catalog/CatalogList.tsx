import { useGetProducts } from '@/hooks/products';
import React from 'react';
import { FlatList, View } from 'react-native';
import EmptyState from '../EmptyState';
import CatalogCard from './CatalogCard';
import Loader from '../Loader';

interface CatalogCardProps {
  category: string | null | undefined;
}

export default function CatalogList({ category }: CatalogCardProps) {
  const { data, isFetching, refetch, isLoading } = useGetProducts(category);

  const loadMore = () => {
    // refetch();
  };

  if (isFetching) {
    return <Loader />;
  }

  return (
    <FlatList
      onRefresh={refetch}
      refreshing={isFetching}
      style={{ padding: 20 }}
      ListEmptyComponent={<EmptyState />}
      data={data}
      numColumns={1}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      renderItem={({ item: product }) => (
        <CatalogCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category?.name}
        ></CatalogCard>
      )}
    />
  );
}
