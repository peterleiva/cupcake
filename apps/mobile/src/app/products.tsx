import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome to the Products page</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
