import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const SearchProductScreen = () => {
  return (
    <View>
      <Text>SearchProductScreen</Text>
      <Link href="/search">go back</Link>
    </View>
  );
};

export default SearchProductScreen;
