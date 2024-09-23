import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Category, useGetCategories } from '@/hooks/categories';
import CategoryPill from './CategoryPill';

interface CategoryListProps {
  showAll?: boolean;
}

const CategoryList = ({ showAll = true }: CategoryListProps) => {
  const { data } = useGetCategories();
  const { navigate } = useRouter();

  const clickHandler = (category?: Category) => {
    navigate({
      pathname: '/search',
      params: { category: category?._id },
    });
  };

  return (
    <View style={style.container}>
      {showAll && (
        <CategoryPill onPress={() => clickHandler()}>Todos</CategoryPill>
      )}

      {data?.map?.((category) => (
        <CategoryPill key={category._id} onPress={() => clickHandler(category)}>
          {category.name}
        </CategoryPill>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
});

export default CategoryList;
