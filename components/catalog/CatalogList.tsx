import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { range } from '@/libs';
import CatalogCard from './CatalogCard';

interface CatalogCardProps {
  category: string | null | undefined;
}

export default function CatalogList({ category }: CatalogCardProps) {
  return (
    <FlatList
      style={{ padding: 20 }}
      ListEmptyComponent={() => <Text>Nenhum item encontrado</Text>}
      data={range(1, 10)}
      numColumns={1}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      renderItem={() => <CatalogCard></CatalogCard>}
    ></FlatList>
  );
}
