import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Category, useGetCategories } from '@/hooks/categories';
import CategoryPill from './CategoryPill';

const CategoryList = () => {
  const { data } = useGetCategories();
  const { navigate } = useRouter();

  const clickCategory = (category: Category) => {
    navigate({
      pathname: '/search',
      params: { category: category._id },
    });
  };

  return (
    <View style={style.container}>
      {data?.map?.((category) => (
        <CategoryPill
          key={category._id}
          title={category.name}
          onPress={() => clickCategory(category)}
        />
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  },
});

export default CategoryList;
