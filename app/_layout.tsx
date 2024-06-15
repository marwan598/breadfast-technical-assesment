import React from "react";
import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import client from "../constants/client";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Farro-Bold": require("../assets/fonts/Farro-Bold.ttf"),
    "Farro-Light": require("../assets/fonts/Farro-Light.ttf"),
    "Farro-Medium": require("../assets/fonts/Farro-Medium.ttf"),
    "Farro-Regular": require("../assets/fonts/Farro-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <ApolloProvider client={client}>
      <Stack
        screenOptions={{
          header: Header,
          headerTransparent: true,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayout;
