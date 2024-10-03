import { Category } from '@/hooks/categories';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Text } from 'react-native-paper';
import { Modal } from '../modal';
import CategoryList from './CategoryList';

export interface CatalogFilterParams {
  category: Category | null;
  favorites: boolean;
}

interface CatalogFilterModalProps {
  category?: string;
  favorites?: boolean;
  onFilter?: (_: CatalogFilterParams) => void;
}

export function CatalogFilterModal({
  favorites = false,
  category: categoryId,
  onFilter,
}: CatalogFilterModalProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(() => favorites);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const applyHandler = () => {
    onFilter?.({ category, favorites: isSwitchOn });
  };

  return (
    <Modal onApply={applyHandler}>
      <View style={styles.field}>
        <Text variant="titleLarge">Categoria</Text>
        <CategoryList category={categoryId} onPress={setCategory} />
      </View>
      <View style={styles.field}>
        <Text variant="titleLarge">Favoritos</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  field: {
    gap: 8,
    marginVertical: 24,
  },
});
