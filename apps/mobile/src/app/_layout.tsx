/* eslint-disable jsx-a11y/accessible-emoji */
import { Slot, Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </SafeAreaProvider>
  );
}
