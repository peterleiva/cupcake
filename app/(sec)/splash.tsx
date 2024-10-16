import { StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Bem-vindo</Title>
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
});
