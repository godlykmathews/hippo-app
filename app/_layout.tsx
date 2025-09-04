import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";

function useProtectedRoute(isAuth: boolean) {
  const segments = useSegments();
  const router = useRouter();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    // Wait for navigation to be ready
    const timer = setTimeout(() => {
      setIsNavigationReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isNavigationReady) return;

    const inAuthGroup = segments[0] === "auth";

    if (!isAuth && !inAuthGroup) {
      // Redirect to auth if not authenticated and not in auth group
      router.replace("/auth");
    } else if (isAuth && inAuthGroup) {
      // Redirect to home if authenticated and in auth group
      router.replace("/(tabs)");
    }
  }, [isAuth, segments, router, isNavigationReady]);
}

export default function RootLayout() {
  const isAuth = false;

  useProtectedRoute(isAuth);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
