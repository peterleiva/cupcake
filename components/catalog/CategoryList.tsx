import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Category, useGetCategories } from '@/hooks/categories';
import CategoryPill from './CategoryPill';
import { useSearchScreenParams } from '@/hooks/useSearchParams';
import { useState } from 'react';

interface CategoryListProps {
  showAll?: boolean;
  category?: string;
  onPress?: (category: Category | null) => void;
}

const CategoryList = ({
  showAll = true,
  category: initialCategory,
  onPress,
}: CategoryListProps) => {
  const { data } = useGetCategories();
  const [categoryId, setCategoryId] = useState(initialCategory);

  const clickHandler = (category: Category | null) => {
    setCategoryId(category?.id);
    onPress?.(category);
  };

  return (
    <View style={style.container}>
      {showAll && (
        <CategoryPill active={!categoryId} onPress={() => clickHandler(null)}>
          Todos
        </CategoryPill>
      )}

      {data?.map?.((category) => (
        <CategoryPill
          key={category.id}
          active={categoryId === category.id}
          onPress={() => clickHandler(category)}
        >
          {category.name}
        </CategoryPill>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

export default CategoryList;
