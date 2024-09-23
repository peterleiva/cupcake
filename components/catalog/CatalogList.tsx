import { useGetProducts } from '@/hooks/products';
import React from 'react';
import { FlatList, View } from 'react-native';
import EmptyState from '../EmptyState';
import CatalogCard from './CatalogCard';

interface CatalogCardProps {
  category: string | null | undefined;
}

export default function CatalogList({ category }: CatalogCardProps) {
  const { data, isFetching, refetch } = useGetProducts(category);

  return (
    <FlatList
      onRefresh={refetch}
      refreshing={isFetching}
      style={{ padding: 20 }}
      ListEmptyComponent={<EmptyState />}
      data={data}
      numColumns={1}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      id="_id"
      renderItem={({ item: product }) => (
        <CatalogCard
          name={product.name}
          price={product.price}
          category={product.category?.name}
        ></CatalogCard>
      )}
    ></FlatList>
  );
}
