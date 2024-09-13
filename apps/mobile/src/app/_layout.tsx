/* eslint-disable jsx-a11y/accessible-emoji */
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Slot></Slot>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
