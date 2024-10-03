import { View } from 'react-native';
import React, { useState } from 'react';
import { Modal } from '../modal';
import { Text } from 'react-native-paper';
import CategoryList from './CategoryList';
import { Category } from '@/hooks/categories';

export interface CatalogFilterParams {
  category: Category | null;
}

interface CatalogFilterModalProps {
  category?: string;
  onFilter?: (_: CatalogFilterParams) => void;
}

export function CatalogFilterModal({
  category: categoryId,
  onFilter,
}: CatalogFilterModalProps) {
  const [category, setCategory] = useState<Category | null>(null);

  const applyHandler = () => {
    onFilter?.({ category });
  };

  return (
    <Modal onApply={applyHandler}>
      <View>
        <Text variant="titleLarge">Categoria</Text>
        <CategoryList category={categoryId} onPress={setCategory} />
      </View>
    </Modal>
  );
}
