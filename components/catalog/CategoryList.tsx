import { StyleSheet, View } from 'react-native';

import CategoryPill from './CategoryPill';

type CategoryListProps = {
  categories?: string[];
};

const CategoryList = ({ categories = [] }: CategoryListProps) => {
  return (
    <View style={style.container}>
      {categories.map((category) => (
        <CategoryPill name={category} key={category} />
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
