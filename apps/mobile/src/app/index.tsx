import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text>Home</Text>
      <Text>Welcome to the home page</Text>
      <Link href="/products">Produtos</Link>
    </View>
  );
}
