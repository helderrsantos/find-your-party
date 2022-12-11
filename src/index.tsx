import React, { useCallback } from 'react';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles';
import Routes from './routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#29292E' }}
        onLayout={onLayoutRootView}
      >
        <Routes />
        <StatusBar style="light" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

registerRootComponent(App);
