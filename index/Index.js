import { StatusBar } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StactNavigation from "../navigation/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Index = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StactNavigation />
        <StatusBar animated={true} backgroundColor="#000" barStyle="#fff" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default Index;
