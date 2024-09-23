import { View, Text, FlatList, RefreshControlComponent } from 'react-native';
import React from 'react';
import { range } from '@/libs';
import CatalogCard from './CatalogCard';
import { Product, useGetProducts } from '@/hooks/products';
import { RefreshControl } from 'react-native-gesture-handler';
import EmptyState from '../EmptyState';

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
        <CatalogCard name={product.name} price={product.price}></CatalogCard>
      )}
    ></FlatList>
  );
}
