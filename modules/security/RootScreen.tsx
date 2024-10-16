import { Stack, useRouter } from 'expo-router';
import { useAuth } from './auth';
import { useEffect } from 'react';
import { APP_ROUTES } from '@/constants/routes.consts';

export function RootScreen() {
  const { isAuthenticated } = useAuth();

  const { navigate } = useRouter();

  useEffect(() => {
    console.log('RootScreen', isAuthenticated);

    navigate(isAuthenticated ? APP_ROUTES.home() : APP_ROUTES.signin());
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/shopping-cart-modal"
        options={{ presentation: 'modal', headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="(modals)/favorites-modal"
        options={{ presentation: 'modal', headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="+not-found" />
    </Stack>
  ) : (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(sec)" options={{ headerShown: false }} />
    </Stack>
  );
}
