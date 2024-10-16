import { useAuth } from '@/modules/security/auth';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSignIn = () => {
    setLoading(true);
    // Adicione a lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
    // Simulação de atraso para o exemplo
    setTimeout(() => {
      setLoading(false);
      login();
      // Redirecionar ou mostrar mensagem de sucesso
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Entre</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSignIn}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
