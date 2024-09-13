import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
      <Link href="/search/products">go to products</Link>
    </View>
  );
};

export default Search;
