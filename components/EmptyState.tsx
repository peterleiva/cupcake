import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface EmptyStateProps {
  message?: string;
}
export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{message ?? 'Nenhum item encontrado'}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
