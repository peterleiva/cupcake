import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Loader() {
  return (
    <ActivityIndicator
      animating={true}
      size="large"
      color={MD2Colors.brown300}
      style={style.loader}
    />
  );
}

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
