import { View, Text } from 'react-native';
import React from 'react';

interface EmptyStateProps {
  message?: string;
}
export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text>{message ?? 'Nenhum item encontrado'}</Text>
    </View>
  );
}
